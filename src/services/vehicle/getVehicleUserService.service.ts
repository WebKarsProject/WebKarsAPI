import AppDataSource from "../../data-source";
import User from "../../entities/user";
import Vehicle from "../../entities/vehicle";
import { listVehicleUser } from "../../schemas/vehicles";

export const getVehicleUserService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.find({
    where: { user: { id: id } },
  });

  const vehicleSerialized = await listVehicleUser.validate(vehicles, {
    stripUnknown: true,
  });

  return vehicleSerialized;
};
export default getVehicleUserService;
