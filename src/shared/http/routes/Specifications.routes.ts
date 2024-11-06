import { Router } from "express";
import { CreateSpecificationController } from "../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../../../modules/cars/useCases/listSpecification/ListSpecificationController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureAdmin } from "../middleware/ensureAdmin";

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);
const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRoutes.get("/", listSpecificationController.handle);

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post(
  "/",
  ensureAdmin,
  createSpecificationController.handle,
);

export { specificationsRoutes };
