import { CategoryModel } from "../../infra/typeorm/model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categoriesDb: CategoryModel[] = [];

  async findByName(name: string): Promise<CategoryModel | undefined> {
    const category = this.categoriesDb.find((c) => c.name === name);

    return category;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new CategoryModel();
    Object.assign(category, { name, description, createdAt: new Date() });
    this.categoriesDb.push(category);
  }

  async list(): Promise<CategoryModel[]> {
    const list = this.categoriesDb;

    return list;
  }
}

export { CategoriesRepositoryInMemory };
