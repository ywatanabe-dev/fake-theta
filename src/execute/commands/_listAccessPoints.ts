import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { listAccessPointsResponse } from '../../response/list-access-points-response';
import { getModel } from '../../response/models';

export function _listAccessPoints(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }
  res.status(200).json(listAccessPointsResponse[model](`${req.body.name}`));
}
