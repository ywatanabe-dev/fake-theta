import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { convertVideoFormatsResponse } from '../../response/convert-video-formats-response';
import { getModel } from '../../response/models';

export function _convertVideoFormats(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (model === 'x') {
    if (
      typeof req.body.parameters?.fileUrl !== 'string' ||
      typeof req.body.parameters?.size !== 'string'
    ) {
      missingParameterError(req, res);
      return;
    }
  } else if (model === 'z1') {
    if (
      typeof req.body.parameters?.fileUrl !== 'string' ||
      typeof req.body.parameters?.size !== 'string' ||
      typeof req.body.parameters?.projectionType !== 'string' ||
      typeof req.body.parameters?.topBottomCorrection !== 'string'
    ) {
      missingParameterError(req, res);
      return;
    }
  }
  res.status(200).json(convertVideoFormatsResponse[model](`${req.body.name}`));
}
