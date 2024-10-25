import CategoryModel from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categoriesDb: CategoryModel[];

  private constructor() {
    this.categoriesDb = [];
  }

  //Singleton pattern
  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new CategoryModel(); // Instanciando o modelo de categoria

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categoriesDb.push(category);
  }

  list(): CategoryModel[] {
    return this.categoriesDb;
  }

  findByName(name: string): CategoryModel | undefined {
    const categoryExists = this.categoriesDb.find((c) => c.name === name);

    return categoryExists;
  }
}

export { CategoriesRepository };
