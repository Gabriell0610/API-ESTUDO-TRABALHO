class ImportCategoryController {
    importCategoryUseCase;
    constructor(importCategoryUseCase) {
        this.importCategoryUseCase = importCategoryUseCase;
    }
    async handle(req, res) {
        const { file } = req;
        if (!file) {
            return res.status(400).json({ message: "No file provided" });
        }
        try {
            await this.importCategoryUseCase.execute(file);
            return res
                .status(200)
                .json({ message: "Categories imported successfully" });
        }
        catch (error) {
            if (error === "Category already exists") {
                return res.status(409).json({ message: error }); // Retorna status 409 = 'conflict' + a a mensagem de erro
            }
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
export { ImportCategoryController };
