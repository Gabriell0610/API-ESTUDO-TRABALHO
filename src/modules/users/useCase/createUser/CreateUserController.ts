import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AppError } from "../../../../errors/AppError";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase);
      await createUserUseCase.execute(req.body);
      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      if (error instanceof AppError)
        return res.status(error.statusCode).json({ error: error.message });
    }
  }
}

export { CreateUserController };
