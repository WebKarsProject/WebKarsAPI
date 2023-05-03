import AppDataSource from '../../data-source'
import User from '../../entities/user'
import Vehicle from '../../entities/vehicle'
import { AppError } from '../../errors/AppError'
import { listVehicleUser } from '../../schemas/vehicles'

export const getVehicleUserService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({ id })

  if (findUser.buyer) {
    throw new AppError('it is not possible to list because the user is not an advertiser', 409)
  }

  const vehicles = await vehicleRepository.find({
    where: { user: { id: id } },
    relations: {
      comments: true,
      images: true
    }
  })

  console.log(vehicles)

  const vehicleSerialized = await listVehicleUser.validate(vehicles, {
    stripUnknown: true
  })

  return vehicleSerialized
}
export default getVehicleUserService
