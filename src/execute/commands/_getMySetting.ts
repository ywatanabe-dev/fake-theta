import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  invalidHeaderParameterError,
  missingParameterError,
} from '../../error';
import { modelHeader } from './config-headers';
import { getModel } from './models';

const response = {
  x: {
    image: (name: string) => {
      return {
        results: {
          options: {
            exposureCompensation: 0,
            captureInterval: 6,
            iso: 400,
            whiteBalance: 'auto',
            _autoBracket: {
              _bracketNumber: 2,
              _bracketParameters: [
                {
                  _colorTemperature: 5000,
                  exposureCompensation: 0.0,
                  exposureProgram: 1,
                  iso: 400,
                  shutterSpeed: 0.004,
                },
                {
                  _colorTemperature: 5000,
                  exposureCompensation: 0.0,
                  exposureProgram: 1,
                  iso: 400,
                  shutterSpeed: 0.004,
                },
              ],
            },
            _waterHousingStitching: 'underwater',
            exposureDelay: 0,
            _filter: 'off',
            shutterSpeed: 0.004,
            _faceDetect: 'OFF',
            isoAutoHighLimit: 1600,
            _timeShift: {
              firstInterval: 2,
              firstShooting: 'front',
              secondInterval: 5,
            },
            _colorTemperature: 5000,
            exposureProgram: 2,
            _shootingMethod: 'normal',
            _waterHousing: 'OFF',
            _aiAutoThumbnail: 'OFF',
            fileFormat: {
              height: 2752,
              _mode: {},
              type: 'jpeg',
              width: 5504,
            },
            captureNumber: 0,
          },
        },
        name,
        state: 'done',
      };
    },
    video: (name: string) => {
      return {
        results: {
          options: {
            exposureCompensation: 0,
            iso: 400,
            whiteBalance: 'auto',
            _maxRecordableTime: 300,
            _waterHousingStitching: 'underwater',
            exposureDelay: 0,
            shutterSpeed: 0.004,
            _gainExternal: '5',
            _topBottomCorrection: 'ApplyAuto',
            _gain: 'normal',
            isoAutoHighLimit: 1600,
            _colorTemperature: 5000,
            exposureProgram: 2,
            _bitrate: 'Normal',
            _waterHousing: 'OFF',
            fileFormat: {
              _codec: 'H.264/MPEG-4 AVC',
              _frameRate: 30,
              height: 1920,
              type: 'mp4',
              width: 3840,
            },
          },
        },
        name,
        state: 'done',
      };
    },
  },
  z1: {
    image: (name: string) => {
      return {
        name,
        results: {
          options: {
            aperture: 0,
            _autoBracket: {
              _bracketNumber: 2,
              _bracketParameters: [
                {
                  aperture: 2.1,
                  _colorTemperature: 5000,
                  exposureCompensation: 0.0,
                  exposureProgram: 1,
                  iso: 400,
                  shutterSpeed: 0.004,
                  whiteBalance: 'auto',
                },
                {
                  aperture: 2.1,
                  _colorTemperature: 5000,
                  exposureCompensation: 0.0,
                  exposureProgram: 1,
                  iso: 400,
                  shutterSpeed: 0.004,
                  whiteBalance: 'auto',
                },
              ],
            },
            _burstOption: {
              _burstBracketStep: 0.0,
              _burstCaptureNum: 1,
              _burstCompensation: 0.0,
              _burstEnableIsoControl: 0,
              _burstMaxExposureTime: 15,
              _burstOrder: 0,
            },
            captureInterval: 6,
            captureNumber: 0,
            _colorTemperature: 5000,
            _compositeShootingOutputInterval: 600,
            _compositeShootingTime: 86400,
            exposureCompensation: 0.0,
            exposureDelay: 0,
            exposureProgram: 2,
            fileFormat: { height: 3360, type: 'jpeg', width: 6720 },
            _filter: 'off',
            iso: 0,
            isoAutoHighLimit: 6400,
            _shootingMethod: 'normal',
            shutterSpeed: 0,
            whiteBalance: 'auto',
            _whiteBalanceAutoStrength: 'OFF',
          },
        },
        state: 'done',
      };
    },
    video: (name: string) => {
      return {
        name,
        results: {
          options: {
            aperture: 0,
            _colorTemperature: 5000,
            exposureCompensation: 0.0,
            exposureDelay: 0,
            exposureProgram: 2,
            fileFormat: {
              _codec: 'H.264/MPEG-4 AVC',
              height: 1920,
              type: 'mp4',
              width: 3840,
            },
            _filter: 'off',
            iso: 0,
            isoAutoHighLimit: 6400,
            _maxRecordableTime: 300,
            shutterSpeed: 0,
            whiteBalance: 'auto',
            _whiteBalanceAutoStrength: 'OFF',
          },
        },
        state: 'done',
      };
    },
  },
};

export function _getMySetting(req: VercelRequest, res: VercelResponse): void {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  const mode = req.body.parameters?.mode;

  if (typeof mode !== 'string' || (mode !== 'image' && mode !== 'video')) {
    missingParameterError(req, res);
    return;
  }

  res.status(200).json(response[model][mode](`${req.body.name}`));
}
