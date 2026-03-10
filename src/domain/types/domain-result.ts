export type DomainResult<T>=
|{ok:true,value?:T}
|{ok:false,error:string}