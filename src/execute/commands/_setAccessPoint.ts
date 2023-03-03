import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { setAccessPointResponse } from '../../response/set-access-point';

export function _setAccessPoint(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (
    typeof req.body.parameters?.ssid !== 'string' ||
    typeof req.body.parameters?.security !== 'string'
  ) {
    missingParameterError(req, res);
    return;
  }
  res.status(200).json(setAccessPointResponse[model](`${req.body.name}`));
}
