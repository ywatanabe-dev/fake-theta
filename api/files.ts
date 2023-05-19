import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs/promises';
import path from 'path';
import { log } from '../src/utils/logger';

export default async (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> => {
  const filePath = path.resolve(__dirname, '../static/sample.jpg');
  const picture = await fs.readFile(filePath);
  res.status(200).setHeader('Content-Type', 'image/jpeg').send(picture);

  log(req, res);
};
