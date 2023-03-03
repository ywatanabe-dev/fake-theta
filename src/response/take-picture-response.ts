import { models } from './models';

export const takePictureResponse: {
  [key in models]: (name: string) => unknown;
} = {
  x: (name) => {
    return {
      id: '10',
      progress: { completion: 0 },
      name,
      state: 'inProgress',
    };
  },
  z1: (name) => {
    return {
      id: '60',
      name,
      progress: { completion: 0.0 },
      state: 'inProgress',
    };
  },
};
