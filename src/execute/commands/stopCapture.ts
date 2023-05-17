import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (proto: string, host: string, name: string) => {
    return {
      results: {
        fileUrls: [`${proto}://${host}/files/100RICOH/R0010015.JPG`],
      },
      name,
      state: 'done',
    };
  },
  z1: (proto: string, host: string, name: string) => {
    return {
      name,
      results: {
        fileUrls: [
          `${proto}://${host}/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG`,
        ],
      },
      state: 'done',
    };
  },
};

export function stopCapture(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  const proto = req.headers['x-forwarded-proto'] ?? 'http';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;

  res
    .status(200)
    .json(response[model](`${proto}`, `${host}`, `${req.body.name}`));
}
