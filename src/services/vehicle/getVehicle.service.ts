import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle';
import { AppError } from '../../errors/AppError';
import { IVehicleResponse } from '../../interfaces/vehicle';

export const getVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.findOneBy({ id: id });

  return vehicles;
};
