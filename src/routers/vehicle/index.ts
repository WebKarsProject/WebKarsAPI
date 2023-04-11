import { Router } from 'express';
import {
  createVehicleController,
  deleteVehicleController,
  getVehicleController,
  listAllVehiclesController,
  updateVehicleController,
} from '../../controllers/vehicle';

export const vehicleRoutes = Router();

vehicleRoutes.post('', createVehicleController);
vehicleRoutes.get('', listAllVehiclesController);
vehicleRoutes.get('/:id', getVehicleController);
vehicleRoutes.patch('/:id', updateVehicleController);
vehicleRoutes.delete('/:id', deleteVehicleController);
