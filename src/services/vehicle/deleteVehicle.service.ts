import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle';
import { AppError } from '../../errors/AppError';

export const deleteVehicleService = async (
  idVehicle: string,
  idUser: string
) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: { id: idVehicle },
    relations: { user: true },
  });

  if (!vehicle) {
    throw new AppError('vehicle not found', 404);
  }

  if (vehicle.user.id !== idUser) {
    throw new AppError(
      'You do not have permission to remove this vehicle',
      404
    );
  }

  await vehicleRepository.remove(vehicle);

  return { message: 'Vehicle deleted successfully' };
};
