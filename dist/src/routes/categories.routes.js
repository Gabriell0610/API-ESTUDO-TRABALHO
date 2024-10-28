import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});
categoriesRoutes.post("/", (req, res) => {
    console.log("Create category", req.body);
    return createCategoryController.handle(req, res);
});
categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res);
});
categoriesRoutes.get("/", (req, res) => {
    return listCategoryController.handle(req, res);
});
export { categoriesRoutes };
