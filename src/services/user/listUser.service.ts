import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { IUserResponse } from "../../interfaces/user";
import { userSchemaList } from "../../schemas/user";

const listUserService = async (): Promise<IUserResponse[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const validListUsers = await userSchemaList.validate(users, {
    stripUnknown: true,
  });

  return validListUsers;
};
export default listUserService;
