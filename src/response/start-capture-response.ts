import { models } from './models';

export const startCaptureResponse: {
  [key in models]: (name: string) => unknown;
} = {
  x: (name) => {
    return {
      id: 10,
      name,
      state: 'done',
    };
  },
  z1: (name) => {
    return {
      name,
      state: 'done',
    };
  },
};
