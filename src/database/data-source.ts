import "reflect-metadata";
import { DataSource } from "typeorm";
import { CategoryModel } from "../modules/cars/model/Category";
import { SpecificationModel } from "../modules/cars/model/Specification";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite", // Nome do serviço no Docker
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  logging: true,
  entities: [CategoryModel, SpecificationModel],
  migrations: ["src/database/migrations/*.ts"],
  synchronize: true,
});
