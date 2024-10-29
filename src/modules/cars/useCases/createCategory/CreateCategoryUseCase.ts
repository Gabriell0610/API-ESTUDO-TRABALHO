import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequet {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  //Substituição de LISKOV & Principio de Inversão de Dependência
  constructor(private categoryRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequet): Promise<void> {
    const categoryExists = await this.categoryRepository.findByName(name); // Verifica se a categoria já existe

    if (categoryExists) {
      throw new Error("Category already exists");
    }

    await this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
