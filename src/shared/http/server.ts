import "reflect-metadata";
import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import "dotenv/config";
import "../container";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "../../swagger.json";
import { AppDataSource } from "./database/data-source";
import { AppError } from "../errors/AppError";

//SERVER
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use((err: Error, req: Request, res: any, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res
    .status(500)
    .json({ message: "Internal Server Error - " + err.message });
});

// Inicializando o DataSource
AppDataSource.initialize().then(async () => {
  console.log("DataSource inicializado com sucesso!");
  app.listen(process.env.PORT, () =>
    console.log(`Rodando na url: http://localhost:${process.env.PORT}`),
  );
});
