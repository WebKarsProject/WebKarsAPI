import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserRes } from "../../interfaces/user";
import { userSchemaRet } from "../../schemas/user";

const profileUserService = async (id: string): Promise<IUserRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  const validUser = await userSchemaRet.validate(findUser, {
    stripUnknown: true,
  });

  console.log(validUser);

  return validUser;
};
export default profileUserService;
