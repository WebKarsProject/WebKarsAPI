import AppDataSource from "../../data-source";
import Vehicle from "../../entities/vehicle";
import { vehiclesSchemaRet } from "../../schemas/vehicles";

export const getVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.findOne({
    where: { id: id },
    relations: { user: true, images: true, comments: true },
  });

  const vehicleSerialized = await vehiclesSchemaRet.validate(vehicles, {
    stripUnknown: true,
  });

  return vehicleSerialized;
};
export default getVehicleService;
