import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import updateUserService from "../../services/user/updateUser.service";
import profileUserService from "../../services/user/profileUser.service";
import updateAddressService from "../../services/address/updateAddress.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

export const profileUserController = async (req: Request, res: Response) => {
  const data = await profileUserService(req.user.id);
  return res.status(200).json(data);
};

export const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.body, req.user.id);
  return res.status(200).json(data);
};

export const updateAddressController = async (req: Request, res: Response) => {
  const data = await updateAddressService(req.user.id, req.body);
  return res.status(200).json(data);
};

export const retriverUserControler = async (req: Request, res: Response) => {
  const data = await retriverUserService(req.user.id);
  return res.status(200).json(data);
};
