import type { IBaseRepository } from "../../../../domain/contracts/base/base-repository.interface.js";
import type { IRepoMapper } from "../../shared/contracts/mappers/repo-mapper.interface.js";

type PrismaDelegate<Persistence>={
    create(args:{data:Persistence}):Promise<Persistence>,

    update(args:{where:{id:string};data:Persistence}):Promise<Persistence>,

    delete(args:{where:{id:string}}):Promise<Persistence>
}

export class BaseRepository<Domain,Persistence> implements IBaseRepository<Domain>{

    constructor(protected readonly repository:PrismaDelegate<Persistence>,
                protected readonly mapper:IRepoMapper<Domain,Persistence>,
    ) {
        
    }

    async create(data: Domain): Promise<Domain> {
        const raw=this.mapper.toPersistence(data);
        const record=await this.repository.create({data:raw})
        const result=this.mapper.toDomain(record);
        return result;
    }

    async update(id: string, data: Domain): Promise<Domain> {
        const raw=this.mapper.toPersistence(data);
        const update=await this.repository.update({where:{id},data:raw});
        const result=this.mapper.toDomain(update)
        return result;
    }

    async delete(id: string): Promise<boolean> {
        await this.repository.delete({where:{id}});
        return true;
    }
}