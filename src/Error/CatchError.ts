import { NextFunction, Request, Response } from 'express';

class CatchError {
  static resolver = (handlerFn: any) => (req:Request, res:Response, next:NextFunction) => Promise
    .resolve(handlerFn(req, res, next)).catch((e) => next(e));
}

export default CatchError;