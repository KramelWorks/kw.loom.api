export interface IAppMapper<Domain,InputDto,OutputDto>{

    toDto(input:Domain):OutputDto;

    toDomain(input:InputDto):Domain;
}