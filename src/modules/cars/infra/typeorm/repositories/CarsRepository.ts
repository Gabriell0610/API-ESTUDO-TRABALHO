import {
  ICarsRepository,
  ICreateCarsDTO,
} from "../../../repositories/ICarsRepository";
import { CarModel } from "../model/Car";

import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/database/data-source";

class CarsRepository implements ICarsRepository {
  private repository: Repository<CarModel>;

  constructor() {
    this.repository = AppDataSource.getRepository(CarModel);
  }

  async create(data: ICreateCarsDTO): Promise<CarModel> {
    const car = this.repository.create(data);
    await this.repository.save(car);
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<CarModel | null> {
    const carAlredyExits = await this.repository.findOne({
      where: { license_plate },
    });

    return carAlredyExits;
  }
}

export { CarsRepository };
