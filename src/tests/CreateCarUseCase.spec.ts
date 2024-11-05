import { CarsRepositoryInMemory } from "../modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../modules/cars/useCases/createCar/CreateCarUseCase";
import { AppError } from "../shared/errors/AppError";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Carro 1",
      description: "Carro teste",
      dale_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "audi",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("Should not be able to create a car with exists license plate ", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Carro 1",
        description: "Carro teste",
        dale_rate: 100,
        license_plate: "ABC-1234", // mesma placa
        fine_amount: 60,
        brand: "audi",
        category_id: "category",
      });
      await createCarUseCase.execute({
        name: "Carro 2",
        description: "Carro teste",
        dale_rate: 100,
        license_plate: "ABC-1234", // mesma placa
        fine_amount: 60,
        brand: "audi",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to create a car with avalaible true try by defaulft", async () => {
    const car = await createCarUseCase.execute({
      name: "Car avalaible",
      description: "Carro teste",
      dale_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "audi",
      category_id: "category",
    });

    console.log(car);

    expect(car.available).toBe(true);
  });
});
