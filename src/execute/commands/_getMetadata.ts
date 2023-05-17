import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: (name: string) => {
    return {
      results: {
        exif: {
          ApertureValue: 0.0,
          BrightnessValue: 0.0,
          ColorSpace: 1.0,
          Compression: 6.0,
          Copyright: '',
          DateTime: '2015:07:10 11:05:18',
          ExifVersion: '0231',
          ExposureBiasValue: 0.0,
          ExposureProgram: 2.0,
          ExposureTime: 0.03333333333333333,
          FNumber: 2.4,
          Flash: 32.0,
          FocalLength: 1.37,
          GPSLatitude: 35.68045,
          GPSLatitudeRef: 'N',
          GPSLongitude: 139.76905555555558,
          GPSLongitudeRef: 'E',
          ImageDescription: '',
          ImageLength: 5504.0,
          ImageWidth: 11008.0,
          Make: 'RICOH',
          Model: 'RICOH THETA X ',
          Orientation: 1.0,
          PhotographicSensitivity: 320.0,
          Software: 'RICOH THETA X Ver 1.41.0',
          WhiteBalance: 0.0,
        },
        xmp: {
          CroppedAreaImageHeightPixels: 5504,
          CroppedAreaImageWidthPixels: 11008,
          CroppedAreaLeftPixels: 0,
          CroppedAreaTopPixels: 0,
          FullPanoHeightPixels: 5504,
          FullPanoWidthPixels: 11008,
          ProjectionType: 'equirectangular',
          UsePanoramaViewer: true,
        },
      },
      name,
      state: 'done',
    };
  },
  z1: (name: string) => {
    return {
      name,
      results: {
        exif: {
          ApertureValue: 4.97,
          BrightnessValue: 6.8,
          ColorSpace: 1,
          Compression: 6,
          Copyright: '',
          DateTime: '2015:07:10 11:05:18',
          ExifVersion: '0231',
          ExposureBiasValue: 0.0,
          ExposureProgram: 2,
          ExposureTime: 0.0125,
          FNumber: 5.6,
          Flash: 32,
          FocalLength: 2.57,
          GPSLatitude: 35.68045,
          GPSLatitudeRef: 'N',
          GPSLongitude: 139.76906,
          GPSLongitudeRef: 'E',
          ImageDescription:
            '                                                               ',
          ImageLength: 3360,
          ImageWidth: 6720,
          Make: 'RICOH',
          Model: 'RICOH THETA Z1',
          Orientation: 1,
          PhotographicSensitivity: 125,
          Software: 'RICOH THETA Z1 Ver 2.20.3',
          WhiteBalance: 0,
        },
        xmp: {
          CroppedAreaImageHeightPixels: 3360,
          CroppedAreaImageWidthPixels: 6720,
          CroppedAreaLeftPixels: 0,
          CroppedAreaTopPixels: 0,
          FullPanoHeightPixels: 3360,
          FullPanoWidthPixels: 6720,
          ProjectionType: 'equirectangular',
          UsePanoramaViewer: true,
        },
      },
      state: 'done',
    };
  },
};

export function _getMetadata(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);
  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  if (typeof req.body.parameters?.fileUrl !== 'string') {
    missingParameterError(req, res);
    return;
  }
  res.status(200).json(response[model](`${req.body.name}`));
}
