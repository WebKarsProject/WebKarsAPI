import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/user";
import { userWithoutPasswordSerializer } from "../../serializers/user";

const sessionServices = async (data: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const userVerify = await userRepository.findOneBy({ email: data.email });

  if (!userVerify) {
    throw new AppError("Email or password invalid", 403);
  }

  const passwordMatch = await compare(data.password, userVerify.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: userVerify.id,
    expiresIn: "24h",
  });

  const user = await userWithoutPasswordSerializer.validate(userVerify, {
    stripUnknown: true,
  });

  return { user, token };
};

export default sessionServices;
