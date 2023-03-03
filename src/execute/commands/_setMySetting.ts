import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { setMySettingResponse } from '../../response/set-my-setting';

export function _setMySetting(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (
    typeof req.body.parameters?.mode !== 'string' ||
    req.body.parameters?.options === undefined
  ) {
    missingParameterError(req, res);
    return;
  }

  res.status(200).json(setMySettingResponse[model](`${req.body.name}`));
}
