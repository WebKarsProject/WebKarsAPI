import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserRes, IUserUpdateReq } from "../../interfaces/user";
import { userSchemaRet } from "../../schemas/user";

const updateUserService = async (
  body: IUserUpdateReq,
  id: string
): Promise<IUserRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  console.log(findUser, "find?");

  const updateUser = userRepository.create({
    ...findUser,
    ...body,
  });

  await userRepository.save(updateUser);

  const validUser = await userSchemaRet.validate(updateUser, {
    stripUnknown: true,
  });

  console.log(validUser, "validou");

  return validUser;
};
export default updateUserService;
