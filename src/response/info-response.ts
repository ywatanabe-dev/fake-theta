import { models } from './models';

export const infoResponse: { [key in models]: unknown } = {
  x: {
    api: [
      '/osc/info',
      '/osc/state',
      '/osc/checkForUpdates',
      '/osc/commands/execute',
      '/osc/commands/status',
    ],
    apiLevel: [2],
    _bluetoothMacAddress: '00:45:de:78:3e:33',
    endpoints: {
      httpPort: 80,
      httpUpdatesPort: 80,
    },
    firmwareVersion: '1.41.0',
    gps: false,
    gyro: false,
    manufacturer: 'Ricoh Company, Ltd.',
    model: 'RICOH THETA X',
    serialNumber: '10100001',
    supportUrl: 'https://theta360.com/en/support/',
    uptime: 67,
    _wlanMacAddress: '00:45:78:bc:45:67',
  },
  z1: {
    api: [
      '/osc/info',
      '/osc/state',
      '/osc/checkForUpdates',
      '/osc/commands/execute',
      '/osc/commands/status',
    ],
    apiLevel: [2],
    _bluetoothMacAddress: '00:45:de:78:3e:33',
    endpoints: {
      httpPort: 80,
      httpUpdatesPort: 80,
    },
    firmwareVersion: '2.20.3',
    gps: false,
    gyro: true,
    manufacturer: 'RICOH',
    model: 'RICOH THETA Z1',
    serialNumber: '10100001',
    supportUrl: 'https://theta360.com/en/support/',
    uptime: 67,
    _wlanMacAddress: '00:45:78:bc:45:67',
  },
};
