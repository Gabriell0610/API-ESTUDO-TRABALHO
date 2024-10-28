import CategoryModel from "../../model/Category";
class CategoriesRepository {
    categoriesDb;
    constructor() {
        this.categoriesDb = [];
    }
    //Singleton pattern
    static INSTANCE;
    static getInstance() {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }
    create({ name, description }) {
        const category = new CategoryModel(); // Instanciando o modelo de categoria
        Object.assign(category, {
            name,
            description,
            createdAt: new Date(),
        });
        this.categoriesDb.push(category);
    }
    list() {
        return this.categoriesDb;
    }
    findByName(name) {
        const categoryExists = this.categoriesDb.find((c) => c.name === name);
        return categoryExists;
    }
}
export { CategoriesRepository };
