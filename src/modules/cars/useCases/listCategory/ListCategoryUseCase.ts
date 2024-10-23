import CategoryModel from '../../model/Category';
import { CategoriesRepository } from '../../repositories/Implementations/CategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  execute(): CategoryModel[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
