import express from "express";
import "dotenv/config";

import { router } from "./routes";

//SERVER
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Rodando na url: http://localhost:${process.env.PORT}`),
);

app.use(router);
