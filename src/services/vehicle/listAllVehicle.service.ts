import AppDataSource from "../../data-source";
import Vehicle from "../../entities/vehicle";

export const listAllVehicleService = async () => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.find({
    relations: { images: true },
  });

  return vehicles;
};
