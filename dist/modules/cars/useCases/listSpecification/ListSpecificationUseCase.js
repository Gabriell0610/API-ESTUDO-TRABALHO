class ListSpecificationUseCase {
    SpecificationRepository;
    constructor(SpecificationRepository) {
        this.SpecificationRepository = SpecificationRepository;
    }
    execute() {
        const specification = this.SpecificationRepository.list();
        return specification;
    }
}
export { ListSpecificationUseCase };
