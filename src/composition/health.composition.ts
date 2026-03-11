import { HealthPublicStatusUseCase } from "../application/use-cases/health/health-public-status.usecase.js";
import { HealthController } from "../infrastructure/http/controllers/health/health.controller.js";

const healthPublicStatusUseCase= new HealthPublicStatusUseCase()

const healthController=new HealthController(healthPublicStatusUseCase);

export {healthController}