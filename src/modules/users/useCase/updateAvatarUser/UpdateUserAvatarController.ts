import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";
import { AppError } from "../../../../shared/errors/AppError";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const updateUserAvatarUseCase = container.resolve(
        UpdateUserAvatarUseCase,
      );

      //Pegando o id do usuario pelo Token
      const { id } = req.user;

      //Pegando o arquivo pela requisição da rota
      const avatarFile = req.file!.filename;

      //Passando o id e o arquivo para o use case
      await updateUserAvatarUseCase.execute({ userId: id, avatarFile });
      return res.status(200).json({ message: "Avatar updated successfully" });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
    }
  }
}
export { UpdateUserAvatarController };
