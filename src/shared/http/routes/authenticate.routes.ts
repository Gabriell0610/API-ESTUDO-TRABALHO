import { Router } from "express";
import { AuthenticanteUserController } from "../../../modules/users/useCase/authenticateUser/AuthentitcateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticanteUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };
