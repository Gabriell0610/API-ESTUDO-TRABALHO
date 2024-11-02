import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1730567615279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cars",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "daily_rate",
            type: "numeric",
          },
          {
            name: "available",
            type: "boolean",
            default: true,
          },
          {
            name: "license_plate",
            type: "varchar",
          },
          {
            name: "fine_amount",
            type: "numeric",
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKCategoryCar", // Nome da chave estrangeira
            referencedTableName: "categories", // Nome da tabela referenciada
            referencedColumnNames: ["id"], // Coluna da tabela referenciada
            columnNames: ["category_id"], // Colunas da tabela atual
            onDelete: "SET NULL", // Ação a ser tomada caso a chave estrangeira seja deletada
            onUpdate: "SET NULL", // Ação a ser tomada caso a chave estrangeira seja atualizada
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars");
  }
}
