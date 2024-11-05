import { Router } from "express";
import { CreateSpecificationController } from "../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../../../modules/cars/useCases/listSpecification/ListSpecificationController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);
const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationController.handle);

export { specificationsRoutes };
