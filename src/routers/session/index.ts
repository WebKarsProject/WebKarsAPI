import { Router } from 'express';
import sessionController from '../../controllers/session';

const sessionRoutes = Router();

sessionRoutes.post('', sessionController);

export default sessionRoutes;
