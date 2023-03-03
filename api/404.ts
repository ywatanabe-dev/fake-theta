import { VercelRequest, VercelResponse } from '@vercel/node';
import { unknownCommandError } from '../src/error';
import { log } from '../src/utils/logger';

export default (req: VercelRequest, res: VercelResponse): void => {
  unknownCommandError(res);
  log(req, res);
};
