import AppDataSource from "../../data-source";
import User from "../../entities/user";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  return;
};
export default deleteUserService;
