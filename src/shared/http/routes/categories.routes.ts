import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "../../../modules/cars/useCases/listCategory/ListCategoryController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureAdmin } from "../middleware/ensureAdmin";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post("/", ensureAdmin, createCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  ensureAdmin,
  importCategoryController.handle,
);

export { categoriesRoutes };
