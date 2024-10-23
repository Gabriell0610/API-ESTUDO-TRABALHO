import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequet {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  //Substituição de LISKOV
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequet) {
    const categoryExists = this.categoryRepository.findByName(name); // Verifica se a categoria já existe

    if (categoryExists) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
