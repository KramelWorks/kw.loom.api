import { Router } from "express";
import { healthController } from "../../../../composition/health.composition.js";

const healthPrivateRoute=Router()
const healthPublicRoute=Router()

//PRIVATE

//PUBLIC
healthPublicRoute.get("/",healthController.getPublicStatus.bind(healthController));

export {healthPrivateRoute,healthPublicRoute}