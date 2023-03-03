import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  invalidParameterNameError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getOptionsResponse } from '../../response/get-options-response';
import { getModel } from '../../response/models';
import { options } from '../../response/options';

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

  res.status(200).json(getOptionsResponse[model](`${req.body.name}`, output));
}
