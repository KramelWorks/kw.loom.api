import type { AppOptions } from "../../../core/types/app-options.js";
import { AppResult } from "../../../core/types/app-result.js";
import type { IHealthPublicStatusUseCase } from "../../contracts/use-cases/health/health-public-status -usecase.interface.js";
import type { HealthStatusDto } from "../../dtos/health/health-status.dto.js";

export class HealthPublicStatusUseCase implements IHealthPublicStatusUseCase{

    async execute(input: null, options?: AppOptions): Promise<AppResult<HealthStatusDto>> {
        const healthPublicStatus:HealthStatusDto={
            status:"running"
        }
        return AppResult.ok<HealthStatusDto>(200,healthPublicStatus);
    }
}