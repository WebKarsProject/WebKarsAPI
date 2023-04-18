import AppDataSource from '../../data-source'
import Image from '../../entities/image'
import User from '../../entities/user'
import Vehicle from '../../entities/vehicle'
import { AppError } from '../../errors/AppError'
import { IVehicleRequest, IVehicleWithImageRequest } from '../../interfaces/vehicle'
import { vehiclesSchemaCreateRet } from '../../schemas/vehicles'

export const createVehicleService = async (data: IVehicleWithImageRequest, idUser: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const userRepository = AppDataSource.getRepository(User)
  const imageRepository = AppDataSource.getRepository(Image)

  const userFind = await userRepository.findOneBy({ id: idUser })

  if (userFind.buyer) {
    throw new AppError('Not authorized', 401)
  }

  const images = data.images
  delete data.images

  const dataNoImage: IVehicleRequest = data

  const vehicleCreate = vehicleRepository.create({ ...dataNoImage, user: userFind })
  await vehicleRepository.save(vehicleCreate)

  images.forEach(async (img) => {
    const imageCreate = imageRepository.create({ ...img, vehicle: vehicleCreate })
    await imageRepository.save(imageCreate)
  })

  const vehicleSerialized = await vehiclesSchemaCreateRet.validate(vehicleCreate, {
    stripUnknown: true
  })

  return vehicleSerialized
}
