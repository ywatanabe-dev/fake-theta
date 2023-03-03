import { models } from './models';

export const getPluginOrdersResponse: {
  [key in models]: (name: string) => unknown;
} = {
  x: (name) => {
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
  z1: (name) => {
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
