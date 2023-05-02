import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle';
import { AppError } from '../../errors/AppError';
import { IVehicleUpdate } from '../../interfaces/vehicle';
import { vehicleUpdateSchema, vehiclesSchemaRet } from '../../schemas/vehicles';

export const updateVehicleService = async (
  data: IVehicleUpdate,
  idVehicle: string,
  idUser: string
) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const findVehicle = await vehicleRepository.findOne({
    where: { id: idVehicle },
    relations: { user: true },
  });

  if (!findVehicle) {
    throw new AppError('vehicle not found', 404);
  }

  if (findVehicle.user.id !== idUser) {
    throw new AppError(
      'You do not have permission to change this vehicle',
      404
    );
  }

  const updateVehicle = vehicleRepository.create({
    ...findVehicle,
    ...data,
  });

  await vehicleRepository.save(updateVehicle);

  const updateVehicleSerializer = await vehicleUpdateSchema.validate(
    updateVehicle,
    {
      stripUnknown: true,
    }
  );

  return updateVehicleSerializer;
};
