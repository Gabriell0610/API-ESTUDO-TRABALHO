import { Router } from "express";
import { CreateCarController } from "../../../modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { ListAvailableCarsController } from "../../../modules/cars/useCases/listAvailableCar/ListAvailableCarsController";

const carsRoutes = Router();
const createCarController = new CreateCarController();
const listAllAvailablesCarsController = new ListAvailableCarsController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get("/available", listAllAvailablesCarsController.handle);

export { carsRoutes };
