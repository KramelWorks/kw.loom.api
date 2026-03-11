import type { HealthStatusDto } from "../../../dtos/health/health-status.dto.js";
import type { IUseCase } from "../../../shared/contracts/use-cases/use-case.interface.js";

export interface IHealthPublicStatusUseCase extends IUseCase<null,HealthStatusDto>{}