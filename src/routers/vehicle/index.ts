import { Router } from 'express'
import { createVehicleController, deleteVehicleController, getVehicleController, listAllVehiclesController, updateVehicleController } from '../../controllers/vehicle'
import validateTokenMiddleware from '../../middleware/validateToken.middleware'
import validateDataMiddleware from '../../middleware/validateData.middleware'
import { vehiclesSchemaReq } from '../../schemas/vehicles'

export const vehicleRoutes = Router()

vehicleRoutes.post('', validateTokenMiddleware, validateDataMiddleware(vehiclesSchemaReq), createVehicleController)
vehicleRoutes.get('', listAllVehiclesController)
vehicleRoutes.get('/:id', getVehicleController)
vehicleRoutes.patch('/:id', updateVehicleController)
vehicleRoutes.delete('/:id', deleteVehicleController)
