import { ListSpecificationUseCase } from './ListSpecificationUseCase';
import { Request, Response } from 'express';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const specification = this.listSpecificationUseCase.execute();

    return res.status(200).json(specification);
  }
}

export { ListSpecificationController };
