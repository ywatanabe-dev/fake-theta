import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { stopCaptureResponse } from '../../response/stop-capture-response';

export function stopCapture(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  const proto = req.headers['x-forwarded-proto'] ?? 'http';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;

  res
    .status(200)
    .json(
      stopCaptureResponse[model](`${proto}`, `${host}`, `${req.body.name}`),
    );
}
