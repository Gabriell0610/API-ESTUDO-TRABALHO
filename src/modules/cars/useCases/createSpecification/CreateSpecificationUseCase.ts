import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequet {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  //Substituição de LISKOV
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequet) {
    const SpecificationExists = this.specificationRepository.findByName(name); // Verifica se a categoria já existe

    if (SpecificationExists) {
      throw new Error('Specification already exists');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
