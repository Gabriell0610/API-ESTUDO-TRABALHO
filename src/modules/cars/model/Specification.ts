import { v4 as uuidv4 } from 'uuid';

class SpecificationModel {
  name!: string;
  description!: string;
  id?: string;
  createdAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { SpecificationModel };
