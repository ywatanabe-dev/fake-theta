import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { setOptionsResponse } from '../../response/set-options-response';

export function setOptions(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (req.body.parameters?.options === undefined) {
    missingParameterError(req, res);
    return;
  }

  res.status(200).json(setOptionsResponse[model](`${req.body.name}`));
}
