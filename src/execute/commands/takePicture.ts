import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { takePictureResponse } from '../../response/take-picture-response';

export function takePicture(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(takePictureResponse[model](`${req.body.name}`));
}
