import { models } from './models';

export const listFilesCaptureResponse: {
  [key in models]: (
    proto: string,
    host: string,
    fileType: string,
    entryCount: number,
    maxThumbSize: number,
    name: string,
  ) => unknown;
} = {
  x: (proto, host, fileType, entryCount, maxThumbSize, name) => {
    if (fileType === 'video') {
      return {
        results: {
          entries: [],
          totalEntries: 0,
        },
        name,
        state: 'done',
      };
    }

    const count = entryCount <= 10 ? entryCount : 10;
    const entries = [...Array(count)].map((value, index) => ({
      dateTime: '2015:07:10 11:05:18',
      _favorite: false,
      fileUrl: `${proto}://${host}/files/100RICOH/R00${10001 + index}.JPG`,
      isProcessed: true,
      name: `R00${10001 + index}.JPG`,
      previewUrl: '',
      size: 4051440,
    }));

    return {
      results: {
        entries,
        totalEntries: 10,
      },
      name,
      state: 'done',
    };
  },
  z1: (proto, host, fileType, entryCount, maxThumbSize, name) => {
    if (fileType === 'video') {
      return {
        results: {
          entries: [],
          totalEntries: 0,
        },
        name,
        state: 'done',
      };
    }

    const count = entryCount <= 10 ? entryCount : 10;
    const entries = [...Array(count)].map((value, index) => ({
      dateTimeZone: '2015:07:10 11:05:18+09:00',
      fileUrl:
        proto +
        '://' +
        host +
        `/files/150100525831424d42075b53ce68c300/100RICOH/R00${
          10001 + index
        }.JPG`,
      height: 3360,
      isProcessed: true,
      name: `R00${10001 + index}.JPG`,
      previewUrl: '',
      _projectionType: 'Equirectangular',
      size: 4051440,
      _thumbSize: 3052,
      ...(maxThumbSize > 0
        ? {
            thumbnail: '(base64_binary)',
          }
        : {}),
      width: 6720,
    }));

    return {
      name,
      results: {
        entries,
        totalEntries: 10,
      },
      state: 'done',
    };
  },
};
