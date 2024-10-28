class CreateCategoryController {
    createCategoriesUseCase;
    constructor(createCategoriesUseCase) {
        this.createCategoriesUseCase = createCategoriesUseCase;
    }
    handle(req, res) {
        this.createCategoriesUseCase.execute(req.body);
        return res.status(201).json({ message: 'Category created successfully' });
    }
}
export { CreateCategoryController };
