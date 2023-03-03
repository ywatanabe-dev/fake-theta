import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../src/error';
import { modelHeader } from '../../src/response/config-headers';
import { getModel } from '../../src/response/models';
import { stateResponse } from '../../src/response/state-response';
import { log } from '../../src/utils/logger';

export default (req: VercelRequest, res: VercelResponse): void => {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(stateResponse[model]);

  log(req, res);
};
