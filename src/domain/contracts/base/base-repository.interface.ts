export interface IBaseRepository<T>{
    create(data:T):Promise<T>;

    update(id:string,data:T):Promise<T>;

    delete(id:string):Promise<boolean>;
}