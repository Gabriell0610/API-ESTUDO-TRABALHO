import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";
interface IRequet {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  //Substituição de LISKOV
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository,
  ) {}

  async execute({ name, description }: IRequet): Promise<void> {
    const SpecificationExists =
      await this.specificationRepository.findByName(name); // Verifica se a categoria já existe

    if (SpecificationExists) {
      throw new Error("Specification already exists");
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
