import { models } from './models';

export const convertVideoFormatsResponse: {
  [key in models]: (name: string) => unknown;
} = {
  x: (name) => {
    return {
      id: '10',
      name,
      state: 'inProgress',
    };
  },
  z1: (name) => {
    return {
      id: '10',
      name,
      progress: { completion: 0.0 },
      state: 'inProgress',
    };
  },
};
