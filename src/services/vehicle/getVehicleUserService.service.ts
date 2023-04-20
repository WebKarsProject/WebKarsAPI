import AppDataSource from "../../data-source";
import User from "../../entities/user";
import Vehicle from "../../entities/vehicle";
import { AppError } from "../../errors/AppError";
import { vehiclesUserSchema } from "../../schemas/vehicles";

export const getVehicleUserService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const vehicles = await vehicleRepository.find({
    where: { user: { id: id } },
  });

  const vehicleSerialized = await vehiclesUserSchema.validate(vehicles, {
    stripUnknown: true,
  });

  return vehicleSerialized;
};
export default getVehicleUserService;
