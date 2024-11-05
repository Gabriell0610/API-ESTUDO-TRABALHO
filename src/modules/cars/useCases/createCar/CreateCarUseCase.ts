import { inject, injectable } from "tsyringe";
import { ICreateCarsDTO } from "../../dto/ICreateCarsDto";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { CarModel } from "../../infra/typeorm/model/Car";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
  ) {}

  async execute(data: ICreateCarsDTO): Promise<CarModel> {
    const carsAlerdyExists = await this.carsRepository.findByLicensePlate(
      data.license_plate,
    );

    if (carsAlerdyExists) {
      throw new AppError("Car already exists", 409);
    }

    const car = await this.carsRepository.create(data);

    return car;
  }
}

export { CreateCarUseCase };
