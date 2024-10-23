import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequet {
  name: string;
  description: string;
}

class CreateSpecificationService {
  //Substituição de LISKOV
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequet) {
    const specificationExists = this.specificationRepository.findByName(name); // Verifica se a categoria já existe

    if (specificationExists) {
      throw new Error('Specification already exists');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
