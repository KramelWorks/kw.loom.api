import { Router } from "express";
import { healthPublicRoute } from "./health/health.route.js";

const publicRoute=Router()

publicRoute.use(healthPublicRoute);

export {publicRoute}