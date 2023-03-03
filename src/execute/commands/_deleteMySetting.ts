import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { deleteMySettingResponse } from '../../response/delete-my-setting-response';
import { getModel } from '../../response/models';

export function _deleteMySetting(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (typeof req.body.parameters?.mode !== 'string') {
    missingParameterError(req, res);
    return;
  }
  res.status(200).json(deleteMySettingResponse[model](`${req.body.name}`));
}
