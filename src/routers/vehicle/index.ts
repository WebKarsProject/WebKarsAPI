import { Router } from 'express'
import { createVehicleController, deleteVehicleController, getVehicleController, listAllVehiclesController, updateVehicleController } from '../../controllers/vehicle'
import validateTokenMiddleware from '../../middleware/validateToken.middleware'

export const vehicleRoutes = Router()

vehicleRoutes.post('', validateTokenMiddleware, createVehicleController)
vehicleRoutes.get('', listAllVehiclesController)
vehicleRoutes.get('/:id', getVehicleController)
vehicleRoutes.patch('/:id', updateVehicleController)
vehicleRoutes.delete('/:id', deleteVehicleController)
