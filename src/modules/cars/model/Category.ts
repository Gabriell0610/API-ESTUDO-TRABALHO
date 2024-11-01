import { v4 as uuidv4 } from "uuid";
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("categories")
class CategoryModel {
  @Column({ primary: true }) // Define a coluna como chave primária.
  id?: string;

  @Column() // Define a coluna como uma string.
  name!: string;

  @Column()
  description!: string;

  @CreateDateColumn() // Define a coluna como uma data e hora.
  createdAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4(); // Usado para criar um ID único para cada categoria, se não houver um ID fornecido.
    }
  }
}

export { CategoryModel };
