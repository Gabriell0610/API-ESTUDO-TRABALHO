import { SpecificationModel } from '../model/Specification';

//DTO
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findByName(name: string): SpecificationModel | undefined;
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): SpecificationModel[];
}

export { ISpecificationRepository, ICreateSpecificationDTO };
