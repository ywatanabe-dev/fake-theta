import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (name: string) => {
    return {
      id: '10',
      name,
      state: 'inProgress',
    };
  },
  z1: (name: string) => {
    return {
      id: '10',
      name,
      progress: { completion: 0.0 },
      state: 'inProgress',
    };
  },
};

export function _convertVideoFormats(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (model === 'x') {
    if (
      typeof req.body.parameters?.fileUrl !== 'string' ||
      typeof req.body.parameters?.size !== 'string'
    ) {
      missingParameterError(req, res);
      return;
    }
  } else if (model === 'z1') {
    if (
      typeof req.body.parameters?.fileUrl !== 'string' ||
      typeof req.body.parameters?.size !== 'string' ||
      typeof req.body.parameters?.projectionType !== 'string' ||
      typeof req.body.parameters?.topBottomCorrection !== 'string'
    ) {
      missingParameterError(req, res);
      return;
    }
  }
  res.status(200).json(response[model](`${req.body.name}`));
}
