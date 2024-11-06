import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarsUseCase } from "./ListAvailableCarsUseCase";

class ListAvailableCarsController {
  async handle(req: Request, res: Response): Promise<any> {
    const listAvailableCarsUseCase = container.resolve(ListCarsUseCase);

    const queryParams = req.query; // dados vão ser passados como query params
    const cars = await listAvailableCarsUseCase.execute(queryParams);
    return res.json(cars);
  }
}

export { ListAvailableCarsController };
