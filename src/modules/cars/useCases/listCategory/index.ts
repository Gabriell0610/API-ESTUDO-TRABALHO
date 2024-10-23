import { CategoriesRepository } from '../../repositories/Implementations/CategoriesRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoryController };
