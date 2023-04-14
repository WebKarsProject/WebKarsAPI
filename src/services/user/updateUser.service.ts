import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserRes, IUserUpdateReq } from "../../interfaces/user";
import { userSchemaReturned } from "../../schemas/user";

const updateUserService = async (
  id: string,
  body: IUserUpdateReq
): Promise<IUserRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  const updateUser = userRepository.create({
    ...findUser,
    ...body,
  });

  await userRepository.save(updateUser);

  const validUser = await userSchemaReturned.validate(updateUser, {
    stripUnknown: true,
  });

  return validUser;
};
export default updateUserService;
