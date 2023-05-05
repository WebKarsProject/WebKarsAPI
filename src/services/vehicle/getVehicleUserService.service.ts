import { Request } from 'express'
import AppDataSource from '../../data-source'
import User from '../../entities/user'
import Vehicle from '../../entities/vehicle'
import { AppError } from '../../errors/AppError'
import { listVehicleUser } from '../../schemas/vehicles'

export const getVehicleUserService = async (req: Request) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({ id: req.params.id })

  if (!findUser) {
    throw new AppError('User not found', 409)
  }

  console.log(findUser)
  if (findUser.buyer) {
    throw new AppError('it is not possible to list because the user is not an advertiser', 409)
  }

  const pageSize = 16
  const page = parseInt(req.query.page as string) || 1
  const skip = (page - 1) * pageSize

  const [vehicles, total] = await vehicleRepository.findAndCount({
    take: pageSize,
    skip,
    where: { user: { id: req.params.id } },
    relations: {
      comments: true,
      images: true
    }
  })

  const totalPage = Math.ceil(total / pageSize)
  const pagination = {
    page: page,
    pageSize: pageSize,
    total: total,
    totalPages: totalPage,
    nextPage: page + 1 > total ? null : page + 1,
    previusPage: page - 1 === 0 ? null : page - 1
  }

  const vehicleSerialized = await listVehicleUser.validate(vehicles, {
    stripUnknown: true
  })

  return { pagination: { ...pagination, vehicles: vehicleSerialized } }
}
export default getVehicleUserService
