import { Router } from "express";
import {
  createVehicleController,
  deleteVehicleController,
  getVehicleController,
  getVehicleUserController,
  listAllVehiclesController,
  updateVehicleController,
} from "../../controllers/vehicle";
import validateTokenMiddleware from "../../middleware/validateToken.middleware";
import validateDataMiddleware from "../../middleware/validateData.middleware";
import { vehicleUpdateSchema, vehiclesSchemaReq } from "../../schemas/vehicles";
import isSellerMiddleware from "../../middleware/IsSeller.middleware";
import { createCommentController } from "../../controllers/comment";

export const vehicleRoutes = Router();

vehicleRoutes.post(
  "",
  validateTokenMiddleware,
  validateDataMiddleware(vehiclesSchemaReq),
  isSellerMiddleware,
  createVehicleController
);

vehicleRoutes.get("", listAllVehiclesController);

vehicleRoutes.get("/user/:id", getVehicleUserController);

vehicleRoutes.get("/:id", getVehicleController);

vehicleRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  validateDataMiddleware(vehicleUpdateSchema),
  updateVehicleController
);

vehicleRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  isSellerMiddleware,
  deleteVehicleController
);

vehicleRoutes.post(
  "/:id/comment",
  validateTokenMiddleware,
  createCommentController
);
