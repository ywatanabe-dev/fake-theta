import { models } from './models';

export const stopCaptureResponse: {
  [key in models]: (proto: string, host: string, name: string) => unknown;
} = {
  x: (proto, host, name) => {
    return {
      results: {
        fileUrls: [`${proto}://${host}/files/100RICOH/R0010015.JPG`],
      },
      name,
      state: 'done',
    };
  },
  z1: (proto, host, name) => {
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
