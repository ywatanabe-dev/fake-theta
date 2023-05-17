import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../src/error';
import { modelHeader } from '../../src/execute/commands/config-headers';
import { getModel } from '../../src/execute/commands/models';
import { log } from '../../src/utils/logger';

const response = {
  x: {
    stateFingerprint: 'FIG_0001',
    throttleTimeout: 1,
  },
  z1: {
    stateFingerprint: 'FIG_0001',
    throttleTimeout: 1,
  },
};

export default (req: VercelRequest, res: VercelResponse): void => {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (typeof req.body?.stateFingerprint !== 'string') {
    missingParameterError(req, res);
    return;
  }

  res.status(200).json(response[model]);
  log(req, res);
};
