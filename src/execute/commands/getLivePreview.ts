import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs/promises';
import path from 'path';

export async function getLivePreview(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  const filePath = path.resolve(
    __dirname,
    '../../../static/sample-preview.jpg',
  );
  const picture = await fs.readFile(filePath);
  res.status(200).setHeader('Content-Type', 'image/jpeg').send(picture);
}
