import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { deleteAccessPointResponse } from '../../response/delete-access-point-response';
import { getModel } from '../../response/models';

export function _deleteAccessPoint(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }
  if (typeof req.body.parameters?.ssid !== 'string') {
    missingParameterError(req, res);
    return;
  }
  res.status(200).json(deleteAccessPointResponse[model](`${req.body.name}`));
}
