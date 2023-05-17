import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (name: string) => {
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
  z1: (name: string) => {
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

export function _listAccessPoints(
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
