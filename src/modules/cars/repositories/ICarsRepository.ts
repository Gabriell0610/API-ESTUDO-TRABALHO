import { ICreateCarsDTO } from "../dto/ICreateCarsDto";
import { CarModel } from "../infra/typeorm/model/Car";

interface ICarsRepository {
  findByLicensePlate(license_plate: string): Promise<CarModel | null>;
  create(data: ICreateCarsDTO): Promise<CarModel>;
}

export { ICarsRepository, ICreateCarsDTO };
