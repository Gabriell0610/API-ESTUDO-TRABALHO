import { inject, injectable } from "tsyringe";
import { CategoryModel } from "../../infra/typeorm/model/Category";
import { CategoriesRepository } from "../../infra/typeorm/repositories/CategoriesRepository";

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: CategoriesRepository,
  ) {}

  async execute(): Promise<CategoryModel[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
