import { v4 as uuidv4 } from "uuid";
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("specifications")
class SpecificationModel {
  @Column({ primary: true })
  id?: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @CreateDateColumn()
  createdAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { SpecificationModel };
