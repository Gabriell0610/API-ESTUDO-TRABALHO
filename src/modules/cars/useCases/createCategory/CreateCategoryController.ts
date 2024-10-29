import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoriesUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.createCategoriesUseCase.execute(req.body);
      return res.status(201).json({ message: "Category created successfully" });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategoryController };
