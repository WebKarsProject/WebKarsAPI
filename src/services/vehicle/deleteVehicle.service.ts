import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle';
import { AppError } from '../../errors/AppError';

export const deleteVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOneBy({ id: id });

  if (!vehicle) {
    throw new AppError('vehicle not found', 404);
  }

  await vehicleRepository.remove(vehicle);

  return { message: 'Vehicle deleted successfully' };
};
