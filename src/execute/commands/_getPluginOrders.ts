import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getPluginOrdersResponse } from '../../response/get-plugin-orders-response';
import { getModel } from '../../response/models';

export function _getPluginOrders(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(getPluginOrdersResponse[model](`${req.body.name}`));
}
