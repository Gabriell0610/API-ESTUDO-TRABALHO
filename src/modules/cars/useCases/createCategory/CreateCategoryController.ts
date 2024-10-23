import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoriesUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    this.createCategoriesUseCase.execute(req.body);

    return res.status(201).json({ message: 'Category created successfully' });
  }
}

export { CreateCategoryController };
