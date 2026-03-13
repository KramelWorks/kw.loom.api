import type { Email } from "../../value-objects/email.js";
import type { Password } from "../../value-objects/password.js";
import type { BaseEntityProps } from "../base/base-entity.props.js";

export interface UserProps extends BaseEntityProps{
       name:string;
       email:Email;
       PlainPassword:Password;
       isblockable:boolean;
       logonAttempts:number;
       lockedAt:Date;
       isLocked:boolean;
}