import { SpecificationModel } from "../../../infra/typeorm/model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../../repositories/ISpecificationRepository";

import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/database/data-source";
class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<SpecificationModel>;

  constructor() {
    this.repository = AppDataSource.getRepository(SpecificationModel);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async list(): Promise<SpecificationModel[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<SpecificationModel | null> {
    const specificationExists = await this.repository.findOne({
      where: { name },
    });

    return specificationExists;
  }
}

export { SpecificationRepository };
