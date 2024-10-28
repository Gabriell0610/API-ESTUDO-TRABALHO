class ListCategoryUseCase {
    categoryRepository;
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    execute() {
        const categories = this.categoryRepository.list();
        return categories;
    }
}
export { ListCategoryUseCase };
