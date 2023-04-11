import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle';
import { AppError } from '../../errors/AppError';
import { IVehicleUpdate } from '../../interfaces/vehicle';

export const updateVehicleService = async (
  data: IVehicleUpdate,
  id: string
) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const findVehicle = await vehicleRepository.findOneBy({
    id: id,
  });

  if (!findVehicle) {
    throw new AppError('vehicle not found', 404);
  }

  const updateVehicle = vehicleRepository.create({
    ...findVehicle,
    ...data,
  });

  await vehicleRepository.save(updateVehicle);

  return updateVehicle;
};
