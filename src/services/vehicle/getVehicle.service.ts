import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle';
import { vehiclesUserReturn } from '../../schemas/vehicles';

export const getVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.findOne({
    where: { id: id },
    relations: { user: true, images: true, comments: true },
  });

  const validatedVehicles = await vehiclesUserReturn.validate(vehicles, {
    stripUnknown: true,
  });

  return validatedVehicles;
};
export default getVehicleService;
