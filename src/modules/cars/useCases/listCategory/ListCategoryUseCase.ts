import { CategoryModel } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  async execute(): Promise<CategoryModel[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
