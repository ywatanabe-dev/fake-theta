import { VercelRequest, VercelResponse } from '@vercel/node';

export function log(req: VercelRequest, res: VercelResponse): void {
  console.log(req.method, req.url, req.body, res.statusCode);
}
