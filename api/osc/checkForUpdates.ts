import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../src/error';
import { updatesResponse } from '../../src/response/check-for-updates-response';
import { modelHeader } from '../../src/response/config-headers';
import { getModel } from '../../src/response/models';
import { log } from '../../src/utils/logger';

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

  res.status(200).json(updatesResponse[model]);
  log(req, res);
};
