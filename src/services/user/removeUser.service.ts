import AppDataSource from '../../data-source';
import User from '../../entities/user';

const deleteUserService = async (idUser: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: idUser });

  await userRepository.remove(user);
};

export default deleteUserService;
