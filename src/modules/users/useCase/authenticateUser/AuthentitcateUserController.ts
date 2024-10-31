import { container } from "tsyringe";
import { AuthenticanteUserUseCase } from "../../useCase/authenticateUser/AuthenticateUserUseCase";
import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
class AuthenticanteUserController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const authenticateUserUseCase = container.resolve(
        AuthenticanteUserUseCase,
      );

      const token = await authenticateUserUseCase.execute(req.body);
      return res.status(200).json(token);
    } catch (error) {
      if (error instanceof AppError)
        return res.status(error.statusCode).json({ error: error.message });
    }
  }
}

export { AuthenticanteUserController };
