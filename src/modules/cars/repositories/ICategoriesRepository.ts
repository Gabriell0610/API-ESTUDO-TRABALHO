import { CategoryModel } from "../infra/typeorm/model/Category";

//DTO
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<CategoryModel | undefined>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<CategoryModel[]>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
