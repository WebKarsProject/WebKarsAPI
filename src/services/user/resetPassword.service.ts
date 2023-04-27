import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { AppError } from "../../errors/AppError";

export const resetPasswordService = async (
  password: string,
  resetToken: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { reset_token: resetToken },
  });

  if (!user) {
    throw new AppError("Invalid user", 404);
  }

  console.log(password);
  console.log(resetToken);

  user.password = password;
  user.reset_token = null;

  await userRepository.save(user);
};
