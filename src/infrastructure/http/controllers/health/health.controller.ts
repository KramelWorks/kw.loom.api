import type { Request, Response } from "express";
import type { HealthPublicStatusUseCase } from "../../../../application/use-cases/health/health-public-status.usecase.js";

export class HealthController{

    constructor(private readonly healthPublicStatusUseCase:HealthPublicStatusUseCase) {
        
    }

    public async getPublicStatus(req:Request,res:Response){
        const result=await this.healthPublicStatusUseCase.execute(null);
        res.status(result.statusCode).json(result.toJson());
    }
}