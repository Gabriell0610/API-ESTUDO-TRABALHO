class CreateSpecificationUseCase {
    specificationRepository;
    //Substituição de LISKOV
    constructor(specificationRepository) {
        this.specificationRepository = specificationRepository;
    }
    execute({ name, description }) {
        const SpecificationExists = this.specificationRepository.findByName(name); // Verifica se a categoria já existe
        if (SpecificationExists) {
            throw new Error('Specification already exists');
        }
        this.specificationRepository.create({ name, description });
    }
}
export { CreateSpecificationUseCase };
