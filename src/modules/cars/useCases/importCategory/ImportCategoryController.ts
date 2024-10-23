import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { Request, Response } from "express";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    if (!file) {
      return res.status(400).json({ message: "No file provided" });
    }

    try {
      await this.importCategoryUseCase.execute(file);
      return res
        .status(200)
        .json({ message: "Categories imported successfully" });
    } catch (error) {
      if (error === "Category already exists") {
        return res.status(500).json({ message: error }); // Retorna status 500 e a mensagem de erro
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export { ImportCategoryController };
