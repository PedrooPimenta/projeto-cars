import { Specification } from "../../entities/Specification";
import {
    ISpecificationsRepository,
    ISpecificationRepositoryDTO,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
    create({ description, name }: ISpecificationRepositoryDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name,
        );
        return specification;
    }
}

export { SpecificationRepository };
