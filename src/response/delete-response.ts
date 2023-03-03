import { models } from './models';

export const deleteResponse: {
  [key in models]: (name: string) => unknown;
} = {
  x: (name) => {
    return {
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
