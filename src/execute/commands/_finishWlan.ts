import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { finishWlanResponse } from '../../response/finish-wlan-response';
import { getModel } from '../../response/models';

export function _finishWlan(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(finishWlanResponse[model](`${req.body.name}`));
}
