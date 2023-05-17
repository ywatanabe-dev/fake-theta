import { VercelRequest, VercelResponse } from '@vercel/node';
import { configHeaders } from './execute/commands/config-headers';

const ERROR_STATE = 'error';

export function missingParameterError(
  req: VercelRequest,
  res: VercelResponse,
): void {
  res.status(400).json({
    name: req.body.name,
    error: {
      code: 'missingParameter',
      message: 'Any required parameter is not specified.',
    },
    state: ERROR_STATE,
  });
}

export function invalidParameterNameError(
  req: VercelRequest,
  res: VercelResponse,
): void {
  res.status(400).json({
    name: req.body.name,
    error: {
      code: 'invalidParameterName',
      message:
        'Any input parameter or option name is unrecognized or supported.',
    },
    state: ERROR_STATE,
  });
}

export function invalidParameterValue(
  req: VercelRequest,
  res: VercelResponse,
): void {
  res.status(400).json({
    name: req.body.name,
    error: {
      code: 'invalidParameterValue',
      message:
        'Any input parameter or option is recognized, but its value is invalid.',
    },
    state: ERROR_STATE,
  });
}

export function unknownCommandError(res: VercelResponse): void {
  res.status(400).json({
    name: 'unknown',
    error: { code: 'unknownCommand', message: 'Command executed is unknown.' },
    state: ERROR_STATE,
  });
}

export function invalidHeaderParameterError(
  res: VercelResponse,
  header: configHeaders,
): void {
  res.status(400).json({
    name: header,
    error: {
      code: 'invalidHeaderParameter',
      message: 'Input header parameter is unrecognized or supported.',
    },
    state: ERROR_STATE,
  });
}
