import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";
class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const createCategoriesUseCase = container.resolve(CreateCategoryUseCase);
      await createCategoriesUseCase.execute(req.body);
      return res.status(201).json({ message: "Category created successfully" });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategoryController };
