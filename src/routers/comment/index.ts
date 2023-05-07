import { Router } from 'express';
import {
  getCommentController,
  removeCommentController,
  updateCommentController,
} from '../../controllers/comment';

const commentRoutes = Router();

commentRoutes.get('/:id', getCommentController);
commentRoutes.patch('/:id', updateCommentController);
commentRoutes.delete('/:id', removeCommentController);

export default commentRoutes;
