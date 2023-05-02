import { Router } from 'express';
import {
  getCommentController,
  removeCommentController,
} from '../../controllers/comment';

const commentRoutes = Router();

commentRoutes.get('/:id', getCommentController);
commentRoutes.delete('/:id', removeCommentController);

export default commentRoutes;
