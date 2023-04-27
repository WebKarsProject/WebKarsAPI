import AppDataSource from '../../data-source';
import User from '../../entities/user';
import { IUserUpdateReq } from '../../interfaces/user';
import { userSchemaRet } from '../../schemas/user';

const profileUserService = async (id: string): Promise<IUserUpdateReq> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id: id },
  });

  const validUser = await userSchemaRet.validate(findUser, {
    stripUnknown: true,
  });

  return validUser;
};
export default profileUserService;
