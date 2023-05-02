import AppDataSource from '../../data-source';
import Comment from '../../entities/comments';
import User from '../../entities/user';
import Vehicle from '../../entities/vehicle';
import { AppError } from '../../errors/AppError';
import { ICommentsResponse, ICommentsReq } from '../../interfaces/comments';
import { commentsSchemaRet } from '../../schemas/comments';

export const createCommentService = async (
  data: ICommentsReq,
  idUser: string,
  idVehicle: string
): Promise<ICommentsResponse> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const commentsRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const vehicleFind = await vehicleRepository.findOneBy({ id: idVehicle });
  const userFind = await userRepository.findOneBy({ id: idUser });

  if (!vehicleFind) {
    throw new AppError(`Vehicle not found`, 404);
  }

  if (!userFind) {
    throw new AppError(`User not found`, 404);
  }

  const commentCreate = commentsRepository.create({
    ...data,
    vehicle: vehicleFind,
    user: userFind,
  });

  await commentsRepository.save(commentCreate);

  const commentSerialized = await commentsSchemaRet.validate(commentCreate, {
    stripUnknown: true,
  });

  return commentSerialized;
};
