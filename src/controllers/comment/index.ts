import { Request, Response } from 'express';
import { createCommentService } from '../../services/comments/createComment.service';
import { ICommentsReq } from '../../interfaces/comments';
import { getCommentService } from '../../services/comments/getComment.service';
import removeCommentService from '../../services/comments/removeComments.service';

const createCommentController = async (req: Request, res: Response) => {
  const data: ICommentsReq = req.body;
  const idUser: string = req.user.id;
  const idVehicle: string = req.params.id;

  const comment = await createCommentService(data, idUser, idVehicle);

  return res.status(201).json(comment);
};

const getCommentController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const commentGet = await getCommentService(id);

  return res.status(201).json(commentGet);
};

export const removeCommentController = async (req: Request, res: Response) => {
  const idComment = req.params.id;

  await removeCommentService(idComment);

  return res.status(204).json({});
};

export { createCommentController, getCommentController };
