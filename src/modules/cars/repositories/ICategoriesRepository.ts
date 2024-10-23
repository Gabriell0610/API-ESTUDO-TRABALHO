import CategoryModel from '../model/Category';

//DTO
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): CategoryModel | undefined;
  create({ name, description }: ICreateCategoryDTO): void;
  list(): CategoryModel[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
