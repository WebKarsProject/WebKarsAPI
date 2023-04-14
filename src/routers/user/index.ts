import { Router } from "express";
import {
  createUserController,
  profileUserController,
  updateUserController,
} from "../../controllers/user";
import userExistMiddleware from "../../middleware/userExist.middleware";
import validateTokenMiddleware from "../../middleware/validateToken.middleware";
import validateDataMiddleware from "../../middleware/validateData.middleware";
import { userSchemaUpdate } from "../../schemas/user";

export const userRoutes = Router();

userRoutes.post(
  "",
  validateDataMiddleware(userSchemaUpdate),
  createUserController
);
userRoutes.get(
  "",
  validateTokenMiddleware,
  userExistMiddleware,
  profileUserController
);
userRoutes.patch(
  "/:id",
  validateDataMiddleware(userSchemaUpdate),
  validateTokenMiddleware,
  userExistMiddleware,
  updateUserController
);
