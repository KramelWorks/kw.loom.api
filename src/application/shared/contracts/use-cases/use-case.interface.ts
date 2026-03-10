import type { AppOptions } from "../../../../core/types/app-options.js";
import type { AppResult } from "../../../../core/types/app-result.js";

export interface IUseCase<Input,Output>{
    execute(input:Input,options?:AppOptions):Promise<AppResult<Output>>;
}