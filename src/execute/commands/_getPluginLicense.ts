import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';
import { missingParameterError } from '../../error';

export async function _getPluginLicense(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (!req.body.parameters?.packageName) {
    missingParameterError(req, res);
    return;
  }

  const filePath = path.resolve(__dirname, 'asset/license.html');
  const licenseData = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'text/html');
  res.write(licenseData);
  res.end();
}
