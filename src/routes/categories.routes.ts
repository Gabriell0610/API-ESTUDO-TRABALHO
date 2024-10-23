import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res): any => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res): any => {
  return listCategoryController.handle(req, res);
});

export { categoriesRoutes };
