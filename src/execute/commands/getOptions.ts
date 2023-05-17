import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  invalidParameterNameError,
  missingParameterError,
} from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';
import { options } from './options';

const response = {
  x: (name: string, options: { [optionName: string]: unknown }) => {
    return {
      results: {
        options,
      },
      name,
      state: 'done',
    };
  },
  z1: (name: string, options: { [optionName: string]: unknown }) => {
    return {
      name,
      results: {
        options,
      },
      state: 'done',
    };
  },
};

export function getOptions(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  const optionNames = req.body.parameters?.optionNames;
  if (!Array.isArray(optionNames)) {
    missingParameterError(req, res);
    return;
  }

  const output: { [optionName: string]: unknown } = {};
  const modelOptions = options[model];
  for (const optionName of optionNames) {
    if (optionName in modelOptions) {
      output[optionName] = modelOptions[optionName];
    } else {
      invalidParameterNameError(req, res);
      return;
    }
  }

  res.status(200).json(response[model](`${req.body.name}`, output));
}
