import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserNoAdressRes } from "../../interfaces/user";
import { IUserUpdateReq } from "../../interfaces/user";
import { userSchemaUpdate } from "../../schemas/user";

const updateUserService = async (
  body: IUserUpdateReq,
  id: string
): Promise<IUserNoAdressRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id },
    relations: { address: true },
  });

  const updateUser = userRepository.create({
    ...findUser,
    ...body,
  });

  await userRepository.save(updateUser);

  const validUser = await userSchemaUpdate.validate(updateUser, {
    stripUnknown: true,
  });

  return validUser;
};
export default updateUserService;
