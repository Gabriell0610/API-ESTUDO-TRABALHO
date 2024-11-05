import {
  Entity,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { CategoryModel } from "./Category";

@Entity("cars")
class CarModel {
  @Column({ primary: true })
  id?: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  dale_rate!: number;

  @Column()
  license_plate!: string;

  @Column()
  fine_amount!: number;

  @Column()
  brand!: string;

  @Column()
  available!: boolean;

  @ManyToOne(() => CategoryModel)
  @JoinColumn({ name: "category_id" })
  category!: CategoryModel; // entidade que representa a categoria

  @Column()
  category_id!: string;

  @CreateDateColumn() // O banco de dados é responsável pela criação da data
  createdAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.available = true;
    }
  }
}

export { CarModel };
