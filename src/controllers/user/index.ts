import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import retriveUserService from "../../services/user/retriveUser.service";
import updateUserService from "../../services/user/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

export const retriverUserController = async (req: Request, res: Response) => {
  const data = await retriveUserService(req.params.id);
  return res.status(200).json(data);
};

export const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.user.id, req.body);
  return res.status(200).json(data);
};
