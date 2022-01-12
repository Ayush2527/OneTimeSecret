import { Response } from 'express';

export const index = (_req: any, res: Response) => {
  res.json({ status: 200 });
};
