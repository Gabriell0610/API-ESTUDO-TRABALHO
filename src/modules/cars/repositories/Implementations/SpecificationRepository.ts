import { SpecificationModel } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specificationsDb: SpecificationModel[];

  //Singleton
  private constructor() {
    this.specificationsDb = [];
  }

  private static INSTANCE: SpecificationRepository;

  static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new SpecificationModel();

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specificationsDb.push(specification);
  }

  list(): SpecificationModel[] {
    return this.specificationsDb;
  }

  findByName(name: string): SpecificationModel | undefined {
    const specificationExists = this.specificationsDb.find(
      (c) => c.name === name,
    );

    return specificationExists;
  }
}

export { SpecificationRepository };
