import { container } from "tsyringe";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { Request, Response } from "express";

class ListSpecificationController {
  async handle(req: Request, res: Response): Promise<any> {
    const listSpecificationUseCase = container.resolve(
      ListSpecificationUseCase,
    );
    const specification = await listSpecificationUseCase.execute();

    return res.status(200).json(specification);
  }
}

export { ListSpecificationController };
