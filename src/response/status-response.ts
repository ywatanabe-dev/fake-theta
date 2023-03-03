import { models } from './models';

export const statusResponse: {
  [key in models]: (proto: string, host: string) => unknown;
} = {
  x: (proto, host) => {
    return {
      results: {
        fileUrl: `${proto}://${host}/files/100RICOH/R0010015.JPG`,
      },
      name: 'camera.takePicture',
      state: 'done',
    };
  },
  z1: (proto, host) => {
    return {
      name: 'camera.takePicture',
      results: {
        fileUrl: `${proto}://${host}/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG`,
      },
      state: 'done',
    };
  },
};
