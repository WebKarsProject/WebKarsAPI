import { Router } from "express";
import {
  createUserController,
  profileUserController,
  updateAddressController,
  updateUserController,
} from "../../controllers/user";
import validateTokenMiddleware from "../../middleware/validateToken.middleware";
import validateDataMiddleware from "../../middleware/validateData.middleware";
import { userSchemaUpdate } from "../../schemas/user";
import { AddressSchemaUpdate } from "../../schemas/address";

export const userRoutes = Router();

userRoutes.post(
  "",
  validateDataMiddleware(userSchemaUpdate),
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
