import { VercelRequest } from '@vercel/node';
import { modelHeader } from './config-headers';

const modelsArray = ['x', 'z1'] as const;
const defaultModel = 'x';
export type models = (typeof modelsArray)[number];
export function getModel(req: VercelRequest): models | undefined {
  const input = req.headers[`${modelHeader}`];
  if (input === undefined) return defaultModel;
  else return modelsArray.find((val) => val === input);
}
