import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { AppError } from "../../errors/AppError";
import { IUserReq, IUserRes } from "../../interfaces/user";
import { userSchemaRet } from "../../schemas/user";
import createAddressService from "../address/createAddress.service";

export const createUserService = async (data: IUserReq): Promise<IUserRes> => {
  const { address } = data;

  const findAddress = await createAddressService(address);

  const userRepository = AppDataSource.getRepository(User);

  const emailVerify = await userRepository.findOneBy({
    email: data.email,
  });

  if (emailVerify) {
    throw new AppError("Email already in use", 409);
  }

  const userCreate = userRepository.create({ ...data, address: findAddress });
  await userRepository.save(userCreate);

  const userWithoutPassword = await userSchemaRet.validate(userCreate, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
