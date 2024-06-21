import { Specification } from "../entities/Specification";

interface ISpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ISpecificationRepositoryDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ISpecificationRepositoryDTO };
