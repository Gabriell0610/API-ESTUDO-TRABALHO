class CreateSpecificationController {
    createSpecificationUseCase;
    constructor(createSpecificationUseCase) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }
    handle(req, res) {
        this.createSpecificationUseCase.execute(req.body);
        return res
            .status(201)
            .json({ message: 'Specification created successfully' });
    }
}
export { CreateSpecificationController };
