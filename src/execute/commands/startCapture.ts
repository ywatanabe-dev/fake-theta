import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { startCaptureResponse } from '../../response/start-capture-response';

export function startCapture(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(startCaptureResponse[model](`${req.body.name}`));
}
