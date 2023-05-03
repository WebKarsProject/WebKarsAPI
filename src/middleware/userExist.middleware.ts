import { Request, Response, NextFunction } from 'express';
import AppDataSource from '../data-source';
import { AppError } from '../errors/AppError';
import User from '../entities/user';

const userExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.findOneBy({ id: req.user.id });

  if (!user) {
    throw new AppError('Invalid User', 404);
  }

  return next();
};

export default userExistMiddleware;
