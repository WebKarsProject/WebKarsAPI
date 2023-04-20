import AppDataSource from "../../data-source";
import User from "../../entities/user";

export const retriverUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: id },
    relations: { vehicle: true },
  });

  return user;
};
export default retriverUserService;
