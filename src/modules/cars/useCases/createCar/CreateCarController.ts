import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(req: Request, res: Response): Promise<any> {
    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute(req.body);
    return res
      .status(201)
      .json({ message: "Carro criado com sucesso.", car: car });
  }
}

export { CreateCarController };
