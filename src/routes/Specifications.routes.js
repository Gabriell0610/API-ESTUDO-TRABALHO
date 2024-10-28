"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
const express_1 = require("express");
const createSpecification_1 = require("../modules/cars/useCases/createSpecification");
const listSpecification_1 = require("../modules/cars/useCases/listSpecification");
const specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
specificationsRoutes.post("/", (req, res) => {
    return createSpecification_1.createSpecificationController.handle(req, res);
});
specificationsRoutes.get("/", (req, res) => {
    return listSpecification_1.listSpecificationController.handle(req, res);
});
