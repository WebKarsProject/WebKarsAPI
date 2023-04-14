import { Router } from "express";
import {
  createUserController,
  retriverUserController,
  updateUserController,
} from "../../controllers/user";
import userExistMiddleware from "../../middleware/userExist.middleware";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id", userExistMiddleware, retriverUserController);
userRoutes.patch("/:id", userExistMiddleware, updateUserController);
