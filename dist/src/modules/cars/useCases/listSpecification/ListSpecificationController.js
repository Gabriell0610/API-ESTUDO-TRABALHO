class ListSpecificationController {
    listSpecificationUseCase;
    constructor(listSpecificationUseCase) {
        this.listSpecificationUseCase = listSpecificationUseCase;
    }
    handle(req, res) {
        const specification = this.listSpecificationUseCase.execute();
        return res.status(200).json(specification);
    }
}
export { ListSpecificationController };
