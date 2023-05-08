import AppDataSource from '../../data-source';
import Comment from '../../entities/comments';
import {
  ICommentsReq,
  ICommentsResponse,
  ICommentsResponseUpdate,
  ICommentsUpdate,
} from '../../interfaces/comments';
import {
  commentsSchemaReq,
  commentsSchemaReqUpdate,
} from '../../schemas/comments';

const updateCommentService = async (
  id: string,
  body: ICommentsUpdate
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(Comment);

  const findUser = await userRepository.findOne({
    where: { id },
    relations: { user: true },
  });

  const updateComment = userRepository.create({
    ...findUser,
    ...body,
  });

  await userRepository.save(updateComment);

  const validComment = await commentsSchemaReqUpdate.validate(updateComment, {
    stripUnknown: true,
  });

  return validComment;
};
export default updateCommentService;
