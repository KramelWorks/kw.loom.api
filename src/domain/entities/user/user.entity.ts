import type { PasswordPolicy } from "../../policies/password.policy.js";
import type { DomainResult } from "../../types/domain-result.js";
import type { Email } from "../../value-objects/email.js";
import type { Password } from "../../value-objects/password.js";
import { BaseEntity } from "../base/base.entity.js";
import type { UserProps } from "./user-entity.props.js";

export class User extends BaseEntity{
    private readonly _name:string;
    private readonly _email:Email;
    private _PlainPassword:Password;
    private readonly _isblockable:boolean;
    private _logonAttempts:number;
    private _lockedAt:Date | undefined;
    private _isLocked:boolean;

    public get name(){return this._name}
    public get email(){return this._email}
    public get PlainPassword(){return this._PlainPassword}
    public get isblockable(){return this._isblockable}
    public get logonAttempts(){return this._logonAttempts}
    public get lockedAt(){return this._lockedAt}
    public get isLocked(){return this._isLocked}

    private constructor(props:UserProps) {
        super(props);
        this._name=props.name;
        this._email=props.email;
        this._PlainPassword=props.PlainPassword;
        this._isblockable=props.isblockable ?? true;
        this._logonAttempts=props.logonAttempts ?? 0;
        this._lockedAt=props.lockedAt ?? undefined;
        this._isLocked=props.isLocked ?? false;
    }

    public static create(props:UserProps): DomainResult<User>{
        const user = new User(props);
        return {ok:true,value:user};
    }

    public recordLoginFailure(policy:PasswordPolicy):DomainResult<void>{
        if(!this._isLocked){
            return {ok:false,error:"User already locked!"}
        }

        this._logonAttempts++;

        if(this._isblockable && this._logonAttempts <=policy.getMaxFailedAttempts()){
            this.lock();
        }

        return {ok:true,value:undefined}
    }

    public recordLoginSuccess(policy:PasswordPolicy):DomainResult<void>{
        this._logonAttempts=0;
        return {ok:true,value:undefined}
    }

    public changePassword(newPassword:Password,policy:PasswordPolicy):DomainResult<void>{
        const validate=policy.validate(newPassword.getValue());

        if(!validate.success){
           return {ok:false,error:validate.message!};     
        }

        this._PlainPassword=newPassword;

        return {ok:true,value:undefined};

    }
    
    public lock(){
        this._isLocked=true;
        this._lockedAt=new Date()
    }

    public unlock(){
        this._isLocked = false
        this._lockedAt = undefined
        this._logonAttempts = 0
    }

    public activate(): DomainResult<void> {
        return super.activate();
    }

    public deactivate(): DomainResult<void> {
        return super.deactivate();
    }

    public markAsDeleted(): DomainResult<void> {
        return super.markAsDeleted();
    }
    
    public restore(): DomainResult<void> {
        return super.restore();
    }
}
