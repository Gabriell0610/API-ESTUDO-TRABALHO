import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { inject, injectable } from "tsyringe";
import { parse } from "csv-parse";
import fs from "fs";

interface IDataCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  // loadFiles(file: Express.Multer.File): Promise<IDataCategory[]> {
  //   return new Promise((resolve, reject) => {
  //     const stream = fs.createReadStream(file.path, { encoding: "utf8" }); // Método responsável por fazer a leitura do arquivo em partes
  //     const categories: IDataCategory[] = []; // Array para armazenar as categorias importadas

  //     // Configura o parser para converter o conteúdo CSV em objetos
  //     const parserFile = csvParse.parse();

  //     stream.pipe(parserFile); // A cada parte lida do arquivo o pipe envia para csvParser para fazer a conversão

  //     parserFile
  //       .on("data", async (line) => {
  //         const [name, description] = line;

  //         categories.push({ name, description });
  //       })
  //       .on("end", async () => {
  //         resolve(categories);
  //       })
  //       .on("error", (error) => {
  //         reject("" + error.message);
  //       });
  //   });
  // }

  // async execute(file: Express.Multer.File): Promise<void> {
  //   const categories = await this.loadFiles(file);

  //   categories.map(async (category) => {
  //     const { name, description } = category;
  //     const categoryExists = this.categoriesRepository.findByName(
  //       category.name,
  //     );
  //     if (!categoryExists) {
  //       this.categoriesRepository.create({ name, description });
  //     }
  //   });
  // }

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository,
  ) {}

  async execute(file: Express.Multer.File): Promise<void> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path, { encoding: "utf8" });
      const parserFile = parse();

      stream.pipe(parserFile);

      parserFile
        .on("data", async (line: any) => {
          const [name, description] = line;

          const categoryExists =
            await this.categoriesRepository.findByName(name);

          if (categoryExists) {
            return reject("Category already exists");
          }

          await this.categoriesRepository.create({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path); // Deleta o arquivo CSV após a importação
          resolve();
        })
        .on("error", (error: Error) => {
          reject(new Error(`Error parsing CSV: ${error.message}`));
        });
    });
  }
}

export { ImportCategoryUseCase };
