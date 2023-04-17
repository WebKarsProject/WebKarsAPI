import { Router } from "express";
import {
  createUserController,
  profileUserController,
  updateUserController,
} from "../../controllers/user";
import validateTokenMiddleware from "../../middleware/validateToken.middleware";
import validateDataMiddleware from "../../middleware/validateData.middleware";
import { userSchemaReq } from "../../schemas/user";

export const userRoutes = Router();

userRoutes.post(
  "",
  validateDataMiddleware(userSchemaReq),
  createUserController
);
userRoutes.get("", validateTokenMiddleware, profileUserController);

userRoutes.patch(
  "",
  // validateDataMiddleware(userSchemaUpdate),
  validateTokenMiddleware,
  updateUserController
);

// userRoutes.patch(
//   "/address",
//   validateDataMiddleware(AddressSchemaUpdate),
//   validateTokenMiddleware,
//   updateAddressController
// );
