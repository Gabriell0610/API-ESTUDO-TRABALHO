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

  async listAllAvailablesCars(data: IListCarsDTO): Promise<CarModel[]> {
    const cars = this.carsDb.filter(
      (car) =>
        car.available == true ||
        (data.brand && car.brand == data.brand) ||
        (data.category_id && car.category_id == data.category_id) ||
        (data.name && car.name == data.name),
    );

    return cars;
  }
}

export { CarsRepositoryInMemory };
