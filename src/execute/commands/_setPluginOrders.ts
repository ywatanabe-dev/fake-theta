import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { setPluginOrdersResponse } from '../../response/set-plugin-orders-response';

export function _setPluginOrders(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (!Array.isArray(req.body.parameters?.pluginOrders)) {
    missingParameterError(req, res);
    return;
  }

  res.status(200).json(setPluginOrdersResponse[model](`${req.body.name}`));
}
