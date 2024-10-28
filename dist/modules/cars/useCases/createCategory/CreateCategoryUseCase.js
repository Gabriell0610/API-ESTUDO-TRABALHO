class CreateCategoryUseCase {
    categoryRepository;
    //Substituição de LISKOV & Principio de Inversão de Dependência
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    execute({ name, description }) {
        const categoryExists = this.categoryRepository.findByName(name); // Verifica se a categoria já existe
        if (categoryExists) {
            throw new Error("Category already exists");
        }
        this.categoryRepository.create({ name, description });
    }
}
export { CreateCategoryUseCase };
