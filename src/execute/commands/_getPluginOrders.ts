import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (name: string) => {
    return {
      results: {
        pluginOrders: [
          'com.example.mytestapplication1',
          'com.example.mytestapplication2',
          'com.example.mytestapplication3',
          'com.example.mytestapplication4',
          'com.example.mytestapplication5',
        ],
      },
      name,
      state: 'done',
    };
  },
  z1: (name: string) => {
    return {
      name,
      results: {
        pluginOrders: [
          'com.theta.remoteplayback',
          'com.theta360.remotecontrol',
          'com.theta360.usbstorage',
        ],
      },
      state: 'done',
    };
  },
};

export function _getPluginOrders(
  req: VercelRequest,
  res: VercelResponse,
): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(response[model](`${req.body.name}`));
}
