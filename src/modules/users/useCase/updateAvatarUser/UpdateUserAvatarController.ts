import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";
import { AppError } from "../../../../shared/errors/AppError";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<any> {
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    //Pegando o id do usuario pelo Token
    const userId = req.userId;

    //Pegando o arquivo pela requisição da rota
    const avatarFile = req.file!.filename;

    //Passando o id e o arquivo para o use case
    await updateUserAvatarUseCase.execute({ userId, avatarFile });
    return res.status(200).json({ message: "Avatar updated successfully" });
  }
}
export { UpdateUserAvatarController };
