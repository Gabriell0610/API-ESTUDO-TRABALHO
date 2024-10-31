import { v4 as uuidv4 } from "uuid";
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("users")
class UserModel {
  @PrimaryColumn()
  id?: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  driver_license!: string;

  @Column({ default: false })
  isAdmin!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4(); // Usado para criar um ID único para cada usuário, se não houver um ID fornecido.
    }
  }
}

export { UserModel };
