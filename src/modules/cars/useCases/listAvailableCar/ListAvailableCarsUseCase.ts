import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarModel } from "../../infra/typeorm/model/Car";

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carRepository: ICarsRepository,
  ) {}

  async execute(data: IListCarsDTO): Promise<CarModel[]> {
    return await this.carRepository.listAllAvailablesCars(data);
  }
}

export { ListCarsUseCase };
