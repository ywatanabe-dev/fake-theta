import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../src/error';
import { modelHeader } from '../../src/response/config-headers';
import { infoResponse } from '../../src/response/info-response';
import { getModel } from '../../src/response/models';
import { log } from '../../src/utils/logger';

export default (req: VercelRequest, res: VercelResponse): void => {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(infoResponse[model]);
  log(req, res);
};
