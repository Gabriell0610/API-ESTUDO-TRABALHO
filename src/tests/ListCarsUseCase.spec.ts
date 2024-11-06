import { CarsRepositoryInMemory } from "../modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../modules/cars/useCases/createCar/CreateCarUseCase";
import { ListCarsUseCase } from "../modules/cars/useCases/listAvailableCar/ListAvailableCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory); // substituição de Liskov & Principio de Inversão de Dependênci
  });

  it("Should be able to list all available cars ", async () => {
    await carsRepositoryInMemory.create({
      // Mockando carros
      name: "Carro 1",
      description: "Carro teste",
      dale_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "audi",
      category_id: "category",
    });
    const cars = await listCarsUseCase.execute({});

    //console.log(cars.length);

    expect(cars).toBeInstanceOf(Array); // Verifica se a resposta é um array
    expect(cars.length).toBeGreaterThan(0); // Verifica se a lista possui pelo menos um carro
    expect(cars.every((car) => car.available)).toBe(true); // Verifica se todos os carros listados são "available"
  });

  it("should be able to list all available cars by name", async () => {
    await carsRepositoryInMemory.create({
      // Mockando carros
      name: "Carro 2",
      description: "Carro teste",
      dale_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "audi",
      category_id: "category",
    });

    const cars = await listCarsUseCase.execute({ name: "Carro 2" });

    expect(cars).toBeInstanceOf(Array); // Verifica se a resposta é um array
    expect(cars[0].name).toBe("Carro 2"); // Verifica se o carro listado possui o nome "Carro 1"
  });

  it("should be able to list all available cars by brand", async () => {
    await carsRepositoryInMemory.create({
      // Mockando carros
      name: "Carro 2",
      description: "Carro teste",
      dale_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "audi",
      category_id: "category",
    });

    const cars = await listCarsUseCase.execute({ brand: "audi" });

    expect(cars).toBeInstanceOf(Array); // Verifica se a resposta é um array
    expect(cars[0].brand).toBe("audi"); // Verifica se o carro listado possui o nome "Carro 1"
  });

  it("should be able to list all available cars by category", async () => {
    await carsRepositoryInMemory.create({
      // Mockando carros
      name: "Carro 2",
      description: "Carro teste",
      dale_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "audi",
      category_id: "12345",
    });

    const cars = await listCarsUseCase.execute({ category_id: "12345" });

    expect(cars).toBeInstanceOf(Array); // Verifica se a resposta é um array
    expect(cars[0].category_id).toBe("12345"); // Verifica se o carro listado possui o nome "Carro 1"
  });
});
