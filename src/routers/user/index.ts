import { Router } from "express";
import {
  createUserController,
  profileUserController,
  resetPasswordController,
  retriverUserControler,
  sendResetPasswordEmailController,
  updateAddressController,
  updateUserController,
} from "../../controllers/user";
import validateTokenMiddleware from "../../middleware/validateToken.middleware";
import validateDataMiddleware from "../../middleware/validateData.middleware";
import { userSchemaReq, userSchemaUpdate } from "../../schemas/user";
import { AddressSchemaUpdate } from "../../schemas/address";

export const userRoutes = Router();

userRoutes.post(
  "",
  validateDataMiddleware(userSchemaReq),
  createUserController
);
userRoutes.get("", validateTokenMiddleware, profileUserController);

userRoutes.patch(
  "",
  validateDataMiddleware(userSchemaUpdate),
  validateTokenMiddleware,
  updateUserController
);

userRoutes.patch(
  "/address",
  validateDataMiddleware(AddressSchemaUpdate),
  validateTokenMiddleware,
  updateAddressController
);

userRoutes.post("/resetPassword", sendResetPasswordEmailController);

userRoutes.patch("/resetPassword/:token", resetPasswordController);

userRoutes.get("/:id", retriverUserControler);
