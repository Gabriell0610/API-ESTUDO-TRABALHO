import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../config/upload";
import { CreateUserController } from "../../../modules/users/useCase/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../../../modules/users/useCase/updateAvatarUser/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle,
);

export { usersRoutes };
