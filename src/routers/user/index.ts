import { Router } from 'express';
import {
  createUserController,
  profileUserController,
  removeUserController,
  resetPasswordController,
  retriverUserControler,
  sendResetPasswordEmailController,
  updateAddressController,
  updateUserController,
} from '../../controllers/user';
import validateTokenMiddleware from '../../middleware/validateToken.middleware';
import validateDataMiddleware from '../../middleware/validateData.middleware';
import { userSchemaReq, userSchemaUpdate } from '../../schemas/user';
import { AddressSchemaUpdate } from '../../schemas/address';

export const userRoutes = Router();

userRoutes.post(
  '',
  validateDataMiddleware(userSchemaReq),
  createUserController
);
userRoutes.get('', validateTokenMiddleware, profileUserController);

userRoutes.get('/:id', retriverUserControler);

userRoutes.patch(
  '/:id',
  validateDataMiddleware(userSchemaUpdate),
  validateTokenMiddleware,
  updateUserController
);

userRoutes.patch(
  '/address',
  validateDataMiddleware(AddressSchemaUpdate),
  validateTokenMiddleware,
  updateAddressController
);

userRoutes.delete('/:id', validateTokenMiddleware, removeUserController);

userRoutes.post('/resetPassword', sendResetPasswordEmailController);

userRoutes.patch('/resetPassword/:token', resetPasswordController);
