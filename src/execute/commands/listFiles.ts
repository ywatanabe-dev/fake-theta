import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { listFilesCaptureResponse } from '../../response/list-files-response';
import { getModel } from '../../response/models';

export function listFiles(req: VercelRequest, res: VercelResponse): void {
  if (
    req.body.parameters?.fileType === undefined ||
    req.body.parameters?.entryCount === undefined ||
    req.body.parameters?.maxThumbSize === undefined
  ) {
    missingParameterError(req, res);
    return;
  }

  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  const proto = req.headers['x-forwarded-proto'] ?? 'http';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;
  const { entryCount, fileType, maxThumbSize } = req.body.parameters;

  res
    .status(200)
    .json(
      listFilesCaptureResponse[model](
        `${proto}`,
        `${host}`,
        `${fileType}`,
        entryCount,
        maxThumbSize,
        `${req.body.name}`,
      ),
    );
}
