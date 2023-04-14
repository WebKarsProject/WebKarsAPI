import { Router } from "express";
import {
  createUserController,
  profileUserController,
  updateUserController,
} from "../../controllers/user";
import userExistMiddleware from "../../middleware/userExist.middleware";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", userExistMiddleware, profileUserController);
userRoutes.patch("/:id", userExistMiddleware, updateUserController);
