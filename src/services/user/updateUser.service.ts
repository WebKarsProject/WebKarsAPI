import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserRes, IUserUpdateReq } from "../../interfaces/user";
import { userSchemaReturned } from "../../schemas/user";

const updateUserService = async (body: IUserUpdateReq): Promise<IUserRes> => {
  const { email } = body;
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ email: email });

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
