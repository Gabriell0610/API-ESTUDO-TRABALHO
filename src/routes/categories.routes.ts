import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res): any => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res): any => {
  return importCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res): any => {
  return listCategoryController.handle(req, res);
});

export { categoriesRoutes };
