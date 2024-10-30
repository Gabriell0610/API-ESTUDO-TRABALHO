import "reflect-metadata";
import express from "express";
import "dotenv/config";
import "./shared/container";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppDataSource } from "./database/data-source";

//SERVER
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

// Inicializando o DataSource
AppDataSource.initialize().then(async () => {
  console.log("DataSource inicializado com sucesso!");
  app.listen(process.env.PORT, () =>
    console.log(`Rodando na url: http://localhost:${process.env.PORT}`),
  );
});
