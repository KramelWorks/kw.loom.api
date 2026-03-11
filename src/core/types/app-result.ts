export class AppResult<T>{
    private readonly _statusCode:number;
    private readonly _success:boolean;
    private readonly _data:T | undefined;
    private readonly _message?:string;

    public get statusCode(){return this._statusCode};
    public get success(){return this._success};
    public get data(){return this._data};
    public get message(){return this._message};

    private constructor(statusCode:number,success:boolean,data?:T,message?:string) {
        this._statusCode=statusCode;
        this._success=success;
        this._data=data;
        this._message=message ?? "";
    }

    public static ok<T>(statusCode=200,data?:T,message="Success!"){
        return new AppResult<T>(statusCode,true,data,message);
    }

    public static fail<T>(statusCode=400,message="Failed!"){
        return new AppResult<T>(statusCode,false,undefined,message);
    }

    public toJson(){
        return{
            statusCode:this._statusCode,
            success:this._success,
            data:this._data,
            message:this._message,
        }
    }
}