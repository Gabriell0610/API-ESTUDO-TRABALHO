import { ListCategoryUseCase } from './ListCategoryUseCase';
import { Request, Response } from 'express';

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const categories = this.listCategoryUseCase.execute();

    return res.status(200).json(categories);
  }
}

export { ListCategoryController };
