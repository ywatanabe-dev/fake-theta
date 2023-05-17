import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
  unknownCommandError,
} from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  z1: (name: string) => {
    return {
      name,
      results: { deviceName: '10100001' },
      state: 'done',
    };
  },
};

export function _setBluetoothDevice(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (model === 'x') {
    unknownCommandError(res);
    return;
  }

  if (typeof req.body.parameters?.uuid !== 'string') {
    missingParameterError(req, res);
    return;
  }

  res.status(200).json(response[model](`${req.body.name}`));
}
