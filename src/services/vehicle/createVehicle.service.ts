import AppDataSource from '../../data-source'
import User from '../../entities/user'
import Vehicle from '../../entities/vehicle'
import { IVehicleRequest } from '../../interfaces/vehicle'

export const createVehicleService = async (data: IVehicleRequest, idUser: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const userRepository = AppDataSource.getRepository(User)

  const userFind = await userRepository.findOneBy({ id: idUser })

  const vehicleCreate = vehicleRepository.create({ ...data, user: userFind })
  await vehicleRepository.save(vehicleCreate)

  return vehicleCreate
}
