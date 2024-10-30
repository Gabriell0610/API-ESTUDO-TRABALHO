import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";
class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase,
      );

      await createSpecificationUseCase.execute(req.body);

      return res
        .status(201)
        .json({ message: "Specification created successfully" });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateSpecificationController };
