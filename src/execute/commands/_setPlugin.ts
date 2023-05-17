import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError, unknownCommandError } from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

export function _setPlugin(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (model === 'x' || model === 'z1') {
    unknownCommandError(res);
    return;
  }
}
