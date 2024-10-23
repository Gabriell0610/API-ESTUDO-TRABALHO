import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res): any => {
  return createSpecificationController.handle(req, res);
});

specificationsRoutes.get("/", (req, res): any => {
  return listSpecificationController.handle(req, res);
});

export { specificationsRoutes };
