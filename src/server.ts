import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import 'dotenv/config';
import { specificationsRoutes } from './routes/Specifications.routes';

//SERVER
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Rodando na url: http://localhost:${process.env.PORT}`),
);

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);
