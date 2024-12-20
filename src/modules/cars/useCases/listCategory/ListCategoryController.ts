import { container } from "tsyringe";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { Request, Response } from "express";

class ListCategoryController {
  async handle(req: Request, res: Response): Promise<any> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);
    const categories = await listCategoryUseCase.execute();

    return res.status(200).json(categories);
  }
}

export { ListCategoryController };
