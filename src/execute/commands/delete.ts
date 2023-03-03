import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { deleteResponse } from '../../response/delete-response';
import { getModel } from '../../response/models';

export function _delete(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }
  if (!Array.isArray(req.body.parameters?.fileUrls)) {
    missingParameterError(req, res);
    return;
  }
  res.status(200).json(deleteResponse[model](`${req.body.name}`));
}
