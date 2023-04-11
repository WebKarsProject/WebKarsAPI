import AppDataSource from "../../data-source";
import User from "../../entities/user";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/user";

const sessionServices = async (data: IUserLogin) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email: data.email });

  if (!user) {
    throw new AppError("Email or password invalid", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: "24h",
  });

  return { user, token };
};

export default sessionServices;
