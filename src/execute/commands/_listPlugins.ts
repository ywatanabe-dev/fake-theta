import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (name: string) => {
    return {
      results: {
        plugins: [
          {
            boot: true,
            exitStatus: 'success',
            force: true,
            foreground: true,
            message: '',
            packageName: 'com.example.mytestapplication1',
            pluginName: 'MyTestApplication1',
            running: false,
            type: 'user',
            version: '1.1',
            webServer: false,
          },
          {
            boot: true,
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.example.mytestapplication2',
            pluginName: 'MyTestApplication2',
            running: false,
            type: 'user',
            version: '1.2',
            webServer: false,
          },
          {
            boot: true,
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.example.mytestapplication3',
            pluginName: 'MyTestApplication3',
            running: false,
            type: 'user',
            version: '1.3',
            webServer: false,
          },
          {
            boot: true,
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.example.mytestapplication4',
            pluginName: 'MyTestApplication4',
            running: false,
            type: 'user',
            version: '1.4',
            webServer: false,
          },
          {
            boot: true,
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.example.mytestapplication5',
            pluginName: 'MyTestApplication5',
            running: false,
            type: 'user',
            version: '1.5',
            webServer: false,
          },
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
        plugins: [
          {
            boot: true,
            bootOptions: '',
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.theta.remoteplayback',
            pluginName: 'Remote Playback',
            running: false,
            type: 'system',
            version: '2.10.3',
            webServer: false,
          },
          {
            boot: true,
            bootOptions: '',
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.theta360.remotecontrol',
            pluginName: 'Remote Control',
            running: false,
            type: 'system',
            version: '1.0.0',
            webServer: false,
          },
          {
            boot: true,
            bootOptions: '',
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.theta360.usbstorage',
            pluginName: 'USB data transfer',
            running: false,
            type: 'system',
            version: '3.0.0',
            webServer: true,
          },
          {
            boot: false,
            bootOptions: '',
            exitStatus: 'success',
            force: false,
            foreground: false,
            message: '',
            packageName: 'com.example.sample',
            pluginName: 'SampleApplication',
            running: true,
            type: 'user',
            version: '0.0.1',
            webServer: false,
          },
        ],
      },
      state: 'done',
    };
  },
};

export function _listPlugins(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(response[model](`${req.body.name}`));
}
