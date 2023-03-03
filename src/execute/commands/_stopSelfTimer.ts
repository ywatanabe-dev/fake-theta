import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { stopSelftimerResponse } from '../../response/stop-self-timer-response';

export function _stopSelfTimer(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(stopSelftimerResponse[model](`${req.body.name}`));
}
