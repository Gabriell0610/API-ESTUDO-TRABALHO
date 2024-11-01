import { CategoryModel } from "../../../infra/typeorm/model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../../repositories/ICategoriesRepository";

import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/http/database/data-source";

class CategoriesRepository implements ICategoriesRepository {
  // private categoriesDb: CategoryModel[];

  // private constructor() {
  //   this.categoriesDb = [];
  // }

  // //Singleton pattern
  // private static INSTANCE: CategoriesRepository;

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }

  //   return CategoriesRepository.INSTANCE;
  // }

  private repository: Repository<CategoryModel>;

  constructor() {
    this.repository = AppDataSource.getRepository(CategoryModel);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // const category = new CategoryModel(); // Instanciando o modelo de categoria

    // Object.assign(category, {
    //   name,
    //   description,
    //   createdAt: new Date(),
    // });

    // this.categoriesDb.push(category);

    const category = this.repository.create({ name, description }); // creando a categoria no banco de dados
    await this.repository.save(category); // salvando a categoria no banco de dados
  }

  async list(): Promise<CategoryModel[]> {
    //return this.categoriesDb;

    const categories = await this.repository.find(); // buscando todas as categorias no banco de dados
    return categories; // retornando as categorias
  }

  async findByName(name: string): Promise<CategoryModel | undefined> {
    // const categoryExists = this.categoriesDb.find((c) => c.name === name);
    // return categoryExists;

    const categoryExists = await this.repository.findOne({ where: { name } }); // buscando a categoria pelo nome no banco de dados

    if (!categoryExists) {
      return undefined; // retornando undefined caso a categoria não exista
    }

    return categoryExists; // retornando a categoria caso exista
  }
}

export { CategoriesRepository };
