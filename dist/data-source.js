import "reflect-metadata";
import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database_ignite",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    synchronize: false,
});
