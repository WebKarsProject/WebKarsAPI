import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { userRetriverRet } from "../../schemas/user";

export const retriverUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: id },
    relations: { vehicle: true },
  });

  const userValid = await userRetriverRet.validate(user, {
    stripUnknown: true,
  });

  return userValid;
};
export default retriverUserService;
