import { v4 as uuidv4 } from 'uuid';
class SpecificationModel {
    name;
    description;
    id;
    createdAt;
    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
export { SpecificationModel };
