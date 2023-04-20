import AppDataSource from "../../data-source";
import Vehicle from "../../entities/vehicle";

export const getVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.findOne({
    where: { id: id },
    relations: { user: true, images: true, comments: true },
  });

  return vehicles;
};
export default getVehicleService;
