import AppDataSource from '../../data-source'
import Image from '../../entities/image'
import Vehicle from '../../entities/vehicle'
import { AppError } from '../../errors/AppError'
import { IVehicleUpdate } from '../../interfaces/vehicle'
import { vehiclesUpdateReturn } from '../../schemas/vehicles'

export const updateVehicleService = async (data: IVehicleUpdate, idVehicle: string, idUser: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const imageRepository = AppDataSource.getRepository(Image)

  const findVehicle = await vehicleRepository.findOne({
    where: { id: idVehicle },
    relations: { user: true, images: true }
  })

  if (!findVehicle) {
    throw new AppError('vehicle not found', 404)
  }

  if (findVehicle.user.id !== idUser) {
    throw new AppError('You do not have permission to change this vehicle', 404)
  }

  data.images.map((e) => {
    findVehicle.images = []
    const images = imageRepository.create({ ...e, vehicle: findVehicle })
    imageRepository.save(images)
    return images
  })

  delete data.images

  const updateVehicle = vehicleRepository.create({
    ...findVehicle,
    ...data
  })

  await vehicleRepository.save(updateVehicle)

  const updateVehicleSerializer = await vehiclesUpdateReturn.validate(updateVehicle, {
    stripUnknown: true
  })

  return updateVehicleSerializer
}
