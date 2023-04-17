import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserRes, IUserUpdateReq } from "../../interfaces/user";
import { userSchemaRet } from "../../schemas/user";

const updateUserService = async (
  body: IUserUpdateReq,
  id: string
): Promise<IUserRes> => {
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

  const validUser = await userSchemaRet.validate(updateUser, {
    stripUnknown: true,
  });

  return validUser;
};
export default updateUserService;
