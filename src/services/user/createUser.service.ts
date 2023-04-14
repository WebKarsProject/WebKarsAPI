import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/user";
import { userSchemaReturned } from "../../schemas/user";

export const createUserService = async (data: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const emailVerify = await userRepository.findOneBy({
    email: data.email,
  });

  if (emailVerify) {
    throw new AppError("Email already in use", 409);
  }

  const userCreate = userRepository.create(data);
  await userRepository.save(userCreate);

  const userWithoutPassword = await userSchemaReturned.validate(userCreate, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
