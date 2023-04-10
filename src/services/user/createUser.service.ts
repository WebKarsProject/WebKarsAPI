import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/user";
import { userWithoutPasswordSerializer } from "../../serializers/user";


export const createUserService = async (data: IUserRequest) => {

  const userRepository = AppDataSource.getRepository(User)

  const emailVerify = await userRepository.findOneBy({
    email: data.email,
  })

  if (emailVerify) {
    throw new AppError('Email em uso', 409)
  }

  const userCreate = userRepository.create(data)
  await userRepository.save(userCreate)

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(userCreate, {
    stripUnknown: true
  })

  return userWithoutPassword
}