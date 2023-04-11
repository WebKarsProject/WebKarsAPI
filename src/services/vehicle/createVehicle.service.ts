import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle';
import { AppError } from '../../errors/AppError';
import { IVehicleRequest } from '../../interfaces/vehicle';

export const createVehicleService = async (data: IVehicleRequest) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicleCreate = vehicleRepository.create(data);
  await vehicleRepository.save(vehicleCreate);

  return vehicleCreate;
};
