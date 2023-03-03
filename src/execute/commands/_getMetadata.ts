import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getMetadataResponse } from '../../response/get-meta-data-response';
import { getModel } from '../../response/models';

export function _getMetadata(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (typeof req.body.parameters?.fileUrl !== 'string') {
    missingParameterError(req, res);
    return;
  }
  res.status(200).json(getMetadataResponse[model](`${req.body.name}`));
}
