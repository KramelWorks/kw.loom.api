export interface IRepoMapper<Domain,Persistence>{

    toPersistence(input:Domain):Persistence;

    toDomain(input:Persistence):Domain;
}