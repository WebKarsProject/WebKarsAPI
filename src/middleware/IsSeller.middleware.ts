import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/AppError'

const isSellerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (req.user.isBuyer) {
    throw new AppError('Not authorized', 401)
  }

  return next()
}

export default isSellerMiddleware
