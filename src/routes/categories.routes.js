"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const createCategory_1 = require("../modules/cars/useCases/createCategory");
const listCategory_1 = require("../modules/cars/useCases/listCategory");
const importCategory_1 = require("../modules/cars/useCases/importCategory");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const upload = (0, multer_1.default)({
    dest: "./tmp",
});
categoriesRoutes.post("/", (req, res) => {
    console.log("Create category", req.body);
    return createCategory_1.createCategoryController.handle(req, res);
});
categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategory_1.importCategoryController.handle(req, res);
});
categoriesRoutes.get("/", (req, res) => {
    return listCategory_1.listCategoryController.handle(req, res);
});
