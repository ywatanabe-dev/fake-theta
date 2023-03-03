import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  invalidParameterValue,
} from '../../../src/error';
import { modelHeader } from '../../../src/response/config-headers';
import { getModel } from '../../../src/response/models';
import { statusResponse } from '../../../src/response/status-response';
import { log } from '../../../src/utils/logger';

export default (req: VercelRequest, res: VercelResponse): void => {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (typeof req.body?.id !== 'string') {
    invalidParameterValue(req, res);
    return;
  }

  const proto = req.headers['x-forwarded-proto'] ?? 'http';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;

  res.status(200).json(statusResponse[model](`${proto}`, `${host}`));

  log(req, res);
};
