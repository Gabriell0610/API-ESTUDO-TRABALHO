import { SpecificationModel } from '../../model/Specification';
import { SpecificationRepository } from '../../repositories/Implementations/SpecificationRepository';

class ListSpecificationUseCase {
  constructor(private SpecificationRepository: SpecificationRepository) {}

  execute(): SpecificationModel[] {
    const specification = this.SpecificationRepository.list();

    return specification;
  }
}

export { ListSpecificationUseCase };
