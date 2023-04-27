import AppDataSource from "../../data-source";
import { randomUUID } from "node:crypto";
import User from "../../entities/user";
import { emailService } from "../../utils/sendEmail.utils";
import { AppError } from "../../errors/AppError";

export const resetPasswordEmailService = async (
  email: string,
  protocol: string,
  host: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { email: email },
  });

  if (!user) {
    throw new AppError("Invalid User", 404);
  }

  const resetToken = randomUUID();

  user.reset_token = resetToken;

  await userRepository.save(user);

  const resetPasswordTemplate = emailService.resetPasswordTemplate(
    email,
    user.name,
    protocol,
    host,
    resetToken
  );

  await emailService.sendEmail(resetPasswordTemplate);
};
