import { ICreateCarsDTO } from "../../dto/ICreateCarsDto";
import { CarModel } from "../../infra/typeorm/model/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  carsDb: CarModel[] = [];
  async create(data: ICreateCarsDTO): Promise<CarModel> {
    const cars = new CarModel();

    Object.assign(cars, data);

    this.carsDb.push(cars);

    return cars;
  }

  async findByLicensePlate(license_plate: string): Promise<CarModel | null> {
    const cardAlredyExits = this.carsDb.find(
      (car) => car.license_plate === license_plate,
    );

    if (!cardAlredyExits) {
      return null;
    }
    return cardAlredyExits;
  }
}

export { CarsRepositoryInMemory };
