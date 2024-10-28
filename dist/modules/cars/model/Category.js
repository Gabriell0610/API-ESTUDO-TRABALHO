import { v4 as uuidv4 } from 'uuid';
class CategoryModel {
    id;
    name;
    description;
    created_at;
    constructor() {
        if (!this.id) {
            this.id = uuidv4(); // Usado para criar um ID único para cada categoria, se não houver um ID fornecido.
        }
    }
}
export default CategoryModel;
