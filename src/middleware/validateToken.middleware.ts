import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError } from '../errors/AppError'
import 'dotenv/config'

const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    throw new AppError('Invalid token', 401)
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded: any) => {
    if (err) {
      throw new AppError(err.message, 401)
    }

    req.user = {
      id: decoded.sub,
      isBuyer: decoded.isBuyer
    }

    return next()
  })
}

export default validateTokenMiddleware
