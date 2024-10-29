import { CategoryModel } from "../model/Category";

//DTO
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<CategoryModel | null>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<CategoryModel[]>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
