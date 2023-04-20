import { Request, Response } from "express";
import { IVehicleRequest, IVehicleUpdate } from "../../interfaces/vehicle";
import { createVehicleService } from "../../services/vehicle/createVehicle.service";
import { listAllVehicleService } from "../../services/vehicle/listAllVehicle.service";
import getVehicleUserService from "../../services/vehicle/getVehicleUserService.service";
import { deleteVehicleService } from "../../services/vehicle/deleteVehicle.service";
import { updateVehicleService } from "../../services/vehicle/updateVehicle.service";
import getVehicleService from "../../services/vehicle/getVehicle.service";

const createVehicleController = async (req: Request, res: Response) => {
  const data = req.body;
  const idUser = req.user.id;

  const vehicle = await createVehicleService(data, idUser);

  return res.status(201).json(vehicle);
};

const listAllVehiclesController = async (req: Request, res: Response) => {
  const vehicle = await listAllVehicleService();

  return res.json(vehicle);
};

const getVehicleUserController = async (req: Request, res: Response) => {
  const vehicles = await getVehicleUserService(req.user.id);
  return res.json(vehicles);
};

const getVehicleController = async (req: Request, res: Response) => {
  const vehicles = await getVehicleService(req.params.id);
  return res.json(vehicles);
};

const updateVehicleController = async (req: Request, res: Response) => {
  const data: IVehicleUpdate = req.body;

  const vehicleId = req.params.id;

  const idUser = req.user.id;

  const updateVehicle = await updateVehicleService(data, vehicleId, idUser);

  return res.json(updateVehicle);
};

const deleteVehicleController = async (req: Request, res: Response) => {
  const vehicleId: string = req.params.id;
  const idUser = req.user.id;

  await deleteVehicleService(vehicleId, idUser);

  return res.status(204).json();
};

export {
  createVehicleController,
  listAllVehiclesController,
  getVehicleUserController,
  updateVehicleController,
  deleteVehicleController,
  getVehicleController,
};
