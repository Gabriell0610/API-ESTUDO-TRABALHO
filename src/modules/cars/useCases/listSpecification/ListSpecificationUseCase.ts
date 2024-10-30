import { inject, injectable } from "tsyringe";
import { SpecificationModel } from "../../model/Specification";
import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private SpecificationRepository: SpecificationRepository,
  ) {}

  async execute(): Promise<SpecificationModel[]> {
    const specification = this.SpecificationRepository.list();

    return specification;
  }
}

export { ListSpecificationUseCase };
