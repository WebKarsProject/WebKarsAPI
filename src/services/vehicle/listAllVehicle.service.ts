import { Request } from 'express'
import AppDataSource from '../../data-source'
import Vehicle from '../../entities/vehicle'
import { vehiclesAllReturn } from '../../schemas/vehicles'

export const listAllVehicleService = async (req: Request) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)

  const pageSize = 16
  const page = parseInt(req.query.page as string) || 1
  const skip = (page - 1) * pageSize

  const [vehicles, total] = await vehicleRepository.findAndCount({
    take: pageSize,
    skip,
    relations: { images: true, user: true }
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

  const validatedVehicles = await vehiclesAllReturn.validate(vehicles, {
    stripUnknown: true
  })

  return { pagination: { ...pagination, vehicles: { ...validatedVehicles } } }
}
