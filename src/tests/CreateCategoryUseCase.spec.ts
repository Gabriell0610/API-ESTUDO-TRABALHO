import { AppError } from "../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase; // Substituição de Liskov & Principio de Inversão de Dependência
let categoriesRepositoryMock: CategoriesRepositoryInMemory; // Mockando o repositório de categorias

describe("Create Category ", () => {
  beforeEach(() => {
    // método que será executado antes de cada teste
    categoriesRepositoryMock = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryMock);
  });

  it("should be able to create a new category", async () => {
    const category = { name: "Category 1", description: "Description 1" }; // Dados de entrada mockados
    await createCategoryUseCase.execute(category); // Executa a ação de criação de categoria

    const categoryCreated = await categoriesRepositoryMock.findByName(
      category.name,
    ); // Verifica se a categoria foi criada com sucesso

    console.log(categoryCreated);
    expect(categoryCreated).toHaveProperty("id"); // Verifica se a categoria possui um ID
  });

  it("should not be able to create a new category with same name", async () => {
    expect(async () => {
      const category = { name: "Category 1", description: "Description 1" }; // Dados de entrada mockados
      await createCategoryUseCase.execute(category); // Executa a ação de criação de categoria

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError); // Verifica se a tentativa de criação de uma categoria com o mesmo nome é rejeitada
  });
});
