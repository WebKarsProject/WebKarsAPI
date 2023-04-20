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
import { vehiclesSchemaReq } from "../../schemas/vehicles";
import isSellerMiddleware from "../../middleware/IsSeller.middleware";

export const vehicleRoutes = Router();

vehicleRoutes.post(
  "",
  validateTokenMiddleware,
  validateDataMiddleware(vehiclesSchemaReq),
  isSellerMiddleware,
  createVehicleController
);

vehicleRoutes.get("", listAllVehiclesController);

vehicleRoutes.get("/user", validateTokenMiddleware, getVehicleUserController);

vehicleRoutes.get("/:id", getVehicleController);

vehicleRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  isSellerMiddleware,
  updateVehicleController
);

vehicleRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  isSellerMiddleware,
  deleteVehicleController
);
