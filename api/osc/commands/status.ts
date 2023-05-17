import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  invalidParameterValue,
} from '../../../src/error';
import { modelHeader } from '../../../src/execute/commands/config-headers';
import { getModel } from '../../../src/execute/commands/models';
import { log } from '../../../src/utils/logger';

const response = {
  x: (proto: string, host: string) => {
    return {
      results: {
        fileUrl: `${proto}://${host}/files/100RICOH/R0010015.JPG`,
      },
      name: 'camera.takePicture',
      state: 'done',
    };
  },
  z1: (proto: string, host: string) => {
    return {
      name: 'camera.takePicture',
      results: {
        fileUrl: `${proto}://${host}/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG`,
      },
      state: 'done',
    };
  },
};

export default (req: VercelRequest, res: VercelResponse): void => {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (typeof req.body?.id !== 'string') {
    invalidParameterValue(req, res);
    return;
  }

  const proto = req.headers['x-forwarded-proto'] ?? 'http';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;

  res.status(200).json(response[model](`${proto}`, `${host}`));

  log(req, res);
};
