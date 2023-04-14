import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/user";
import { createUserService } from "../../services/user/createUser.service";
import listUserService from "../../services/user/listUser.service";
import retriveUserService from "../../services/user/retriveUser.service";
import updateUserService from "../../services/user/updateUser.service";
import deleteUserService from "../../services/user/deleteUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

export const listUserController = async (req: Request, res: Response) => {
  const array = await listUserService();
  return res.status(200).json(array);
};

export const retriverUserController = async (req: Request, res: Response) => {
  const data = await retriveUserService(req.params.id);
  return res.status(200).json(data);
};

export const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.user.id, req.body);
  return res.status(200).json(data);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const data = await deleteUserService(req.user.id);
  return res.status(204).json(data);
};
