import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { pluginControlResponse } from '../../response/plugin-control-response';

export function _pluginControl(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (typeof req.body.parameters?.action !== 'string') {
    missingParameterError(req, res);
    return;
  }
  res.status(200).json(pluginControlResponse[model](`${req.body.name}`));
}
