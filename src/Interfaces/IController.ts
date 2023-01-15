import { NextFunction, Request, Response } from 'express';

export default interface IController {
  req: Request;
  res: Response;
  next: NextFunction;
}