import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserRes } from "../../interfaces/user";
import { userSchemaReturned } from "../../schemas/user";

const profileUserService = async (id: string): Promise<IUserRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  const validUser = await userSchemaReturned.validate(findUser, {
    stripUnknown: true,
  });

  return validUser;
};
export default profileUserService;
