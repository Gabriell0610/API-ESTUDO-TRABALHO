class ListCategoryController {
    listCategoryUseCase;
    constructor(listCategoryUseCase) {
        this.listCategoryUseCase = listCategoryUseCase;
    }
    handle(req, res) {
        const categories = this.listCategoryUseCase.execute();
        return res.status(200).json(categories);
    }
}
export { ListCategoryController };
