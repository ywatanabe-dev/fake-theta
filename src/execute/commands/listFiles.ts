import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (
    proto: string,
    host: string,
    fileType: string,
    entryCount: number,
    maxThumbSize: number,
    name: string,
  ) => {
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
  z1: (
    proto: string,
    host: string,
    fileType: string,
    entryCount: number,
    maxThumbSize: number,
    name: string,
  ) => {
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

export function listFiles(req: VercelRequest, res: VercelResponse): void {
  if (
    req.body.parameters?.fileType === undefined ||
    req.body.parameters?.entryCount === undefined ||
    req.body.parameters?.maxThumbSize === undefined
  ) {
    missingParameterError(req, res);
    return;
  }

  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  const proto = req.headers['x-forwarded-proto'] ?? 'http';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;
  const { entryCount, fileType, maxThumbSize } = req.body.parameters;

  res
    .status(200)
    .json(
      response[model](
        `${proto}`,
        `${host}`,
        `${fileType}`,
        entryCount,
        maxThumbSize,
        `${req.body.name}`,
      ),
    );
}
