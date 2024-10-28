import { SpecificationModel } from '../../model/Specification';
class SpecificationRepository {
    specificationsDb;
    //Singleton
    constructor() {
        this.specificationsDb = [];
    }
    static INSTANCE;
    static getInstance() {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }
    create({ name, description }) {
        const specification = new SpecificationModel();
        Object.assign(specification, {
            name,
            description,
            createdAt: new Date(),
        });
        this.specificationsDb.push(specification);
    }
    list() {
        return this.specificationsDb;
    }
    findByName(name) {
        const specificationExists = this.specificationsDb.find((c) => c.name === name);
        return specificationExists;
    }
}
export { SpecificationRepository };
