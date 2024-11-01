import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const createCategoriesUseCase = container.resolve(CreateCategoryUseCase); // Resolução da inversão de dependência
      await createCategoriesUseCase.execute(req.body); // Executando o use case
      return res.status(201).json({ message: "Category created successfully" }); // Retornando status 201 e mensagem de sucesso
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ error: error.message }); // Retornando status 400 e o erro caso ocorra
      }
    }
  }
}

export { CreateCategoryController };
