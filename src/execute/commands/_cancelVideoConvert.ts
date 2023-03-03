import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { cancelVideoConvertResponse } from '../../response/cancel-video-convert-response';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';

export function _cancelVideoConvert(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(cancelVideoConvertResponse[model](`${req.body.name}`));
}
