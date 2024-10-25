import express from "express";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

//SERVER
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`Rodando na url: http://localhost:${process.env.PORT}`),
);
