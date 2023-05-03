import { Router } from "express";
import sessionController from "../../controllers/session/session.controller";
import validateDataMiddleware from "../../middleware/validateData.middleware";
import { sessionSchemasReq } from "../../schemas/session";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  validateDataMiddleware(sessionSchemasReq),
  sessionController
);

export default sessionRoutes;
