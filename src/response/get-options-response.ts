import { models } from './models';

export const getOptionsResponse: {
  [key in models]: (
    name: string,
    options: { [optionName: string]: unknown },
  ) => unknown;
} = {
  x: (name, options) => {
    return {
      results: {
        options,
      },
      name,
      state: 'done',
    };
  },
  z1: (name, options) => {
    return {
      name,
      results: {
        options,
      },
      state: 'done',
    };
  },
};
