import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { listPluginsResponse } from '../../response/list-plugins-response';
import { getModel } from '../../response/models';

export function _listPlugins(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(listPluginsResponse[model](`${req.body.name}`));
}
