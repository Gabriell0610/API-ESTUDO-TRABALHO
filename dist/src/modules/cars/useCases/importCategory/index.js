import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
const importCategoryRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(importCategoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);
export { importCategoryController };
