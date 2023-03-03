import { models } from './models';

export const listAccessPointsResponse: {
  [key in models]: (name: string) => unknown;
} = {
  x: (name) => {
    return {
      results: {
        accessPoints: [
          {
            connectionPriority: 3,
            ipAddressAllocation: 'dynamic',
            security: 'WPA/WPA2 PSK',
            ssid: 'Test-Access-Point3',
            ssidStealth: false,
          },
          {
            connectionPriority: 2,
            defaultGateway: '192.168.1.1',
            ipAddress: '192.168.1.254',
            ipAddressAllocation: 'static',
            security: 'WPA/WPA2 PSK',
            ssid: 'Test-Access-Point2',
            ssidStealth: false,
            subnetMask: '24',
          },
          {
            connectionPriority: 1,
            defaultGateway: '192.168.1.1',
            ipAddress: '192.168.1.253',
            ipAddressAllocation: 'static',
            security: 'WEP',
            ssid: 'Test-Access-Point1',
            ssidStealth: true,
            subnetMask: '24',
          },
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
        accessPoints: [
          {
            connectionPriority: 1,
            defaultGateway: '192.168.1.1',
            ipAddress: '192.168.1.254',
            ipAddressAllocation: 'static',
            security: 'WEP',
            ssid: 'Test-Access-Point1',
            ssidStealth: true,
            subnetMask: '255.255.255.0',
          },
          {
            connectionPriority: 2,
            defaultGateway: '192.168.1.1',
            ipAddress: '192.168.1.254',
            ipAddressAllocation: 'static',
            security: 'WPA/WPA2 PSK',
            ssid: 'Test-Access-Point2',
            ssidStealth: false,
            subnetMask: '255.255.255.0',
          },
          {
            connectionPriority: 3,
            ipAddressAllocation: 'dynamic',
            security: 'WPA/WPA2 PSK',
            ssid: 'Test-Access-Point3',
            ssidStealth: false,
          },
        ],
      },
      state: 'done',
    };
  },
};
