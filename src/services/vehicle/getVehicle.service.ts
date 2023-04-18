import AppDataSource from '../../data-source'
import Vehicle from '../../entities/vehicle'
import { AppError } from '../../errors/AppError'
import { vehiclesSchemaRet } from '../../schemas/vehicles'

export const getVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)

  try {
    const vehicles = await vehicleRepository.findOne({
      where: {
        id: id
      },
      relations: {
        comments: true,
        images: true,
        user: true
      }
    })

    const vehicleSerialized = await vehiclesSchemaRet.validate(vehicles, {
      stripUnknown: true
    })

    return vehicleSerialized
  } catch (error) {
    throw new AppError('Vehicle not found', 404)
  }
}
