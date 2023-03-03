import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
  unknownCommandError,
} from '../../error';
import { modelHeader } from '../../response/config-headers';
import { getModel } from '../../response/models';
import { setBluetoothDeviceResponse } from '../../response/set-bluetooth-device-response';

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

  res.status(200).json(setBluetoothDeviceResponse[model](`${req.body.name}`));
}
