import { Router } from "express";
import { createUserController } from "../../controllers/user";

export const userRoutes = Router()

userRoutes.post('', createUserController)