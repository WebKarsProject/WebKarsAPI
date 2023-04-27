import { Request, Response } from 'express';
import { createUserService } from '../../services/user/createUser.service';
import updateUserService from '../../services/user/updateUser.service';
import profileUserService from '../../services/user/profileUser.service';
import updateAddressService from '../../services/address/updateAddress.service';
import retriverUserService from '../../services/user/retriveruser.service';
import { resetPasswordEmailService } from '../../services/user/resetPasswordEmail.service';
import { resetPasswordService } from '../../services/user/resetPassword.service';
import deleteUserService from '../../services/user/removeUser.service';

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
  const data = await retriverUserService(req.params.id);
  return res.status(200).json(data);
};

export const removeUserController = async (req: Request, res: Response) => {
  const idUser = req.params.id;
  await deleteUserService(idUser);
  return res.status(204).json({});
};

export const sendResetPasswordEmailController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;
  const { protocol } = req;
  const host = req.get('host');

  await resetPasswordEmailService(email, protocol, host!);

  return res.json({ message: 'Reset token sent' });
};

export const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  await resetPasswordService(password, token);

  return res.json({ message: 'Password changed' });
};
