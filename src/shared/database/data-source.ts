import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite", // Nome do serviço no Docker
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  logging: true,
  entities: ["src/modules/**/*.ts"],
  migrations: ["src/shared/database/migrations/*.ts"],
  synchronize: true,
});
