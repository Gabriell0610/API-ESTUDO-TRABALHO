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

  async listAllAvailablesCars(data: IListCarsDTO): Promise<CarModel[]> {
    const { name, brand, category_id } = data;
    const carsQuery = this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("c.brand = :brand", { brand });
    }

    if (name) {
      carsQuery.andWhere("c.name = :name", { name });
    }

    if (category_id) {
      carsQuery.andWhere("c.category_id = :category_id", { category_id });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }
}

export { CarsRepository };
