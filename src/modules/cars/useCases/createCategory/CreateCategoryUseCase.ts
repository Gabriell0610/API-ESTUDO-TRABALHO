import { AppError } from "../../../../shared/errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
interface IRequet {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  //Substituição de LISKOV & Principio de Inversão de Dependência
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequet): Promise<void> {
    const categoryExists = await this.categoryRepository.findByName(name); // Verifica se a categoria já existe

    if (categoryExists) {
      throw new AppError("Category already exists", 400);
    }

    await this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
