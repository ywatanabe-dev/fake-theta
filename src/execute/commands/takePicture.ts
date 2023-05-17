import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (name: string) => {
    return {
      id: '10',
      progress: { completion: 0 },
      name,
      state: 'inProgress',
    };
  },
  z1: (name: string) => {
    return {
      id: '60',
      name,
      progress: { completion: 0.0 },
      state: 'inProgress',
    };
  },
};

export function takePicture(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(response[model](`${req.body.name}`));
}
