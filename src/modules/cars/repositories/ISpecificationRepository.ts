import { SpecificationModel } from "../infra/typeorm/model/Specification";

//DTO
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findByName(name: string): Promise<SpecificationModel | null>;
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  list(): Promise<SpecificationModel[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
