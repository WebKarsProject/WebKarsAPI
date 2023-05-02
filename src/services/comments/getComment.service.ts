import AppDataSource from '../../data-source';
import Comment from '../../entities/comments';
import { AppError } from '../../errors/AppError';
import { commentsSchemaReturnOnlyInfo } from '../../schemas/comments';

export const getCommentService = async (id: string) => {
  const commentsRepository = AppDataSource.getRepository(Comment);

  const commentFind = await commentsRepository.findOneBy({ id: id });

  if (!commentFind) {
    throw new AppError(`Comment not found`, 404);
  }

  const commentSerialized = await commentsSchemaReturnOnlyInfo.validate(
    commentFind,
    {
      stripUnknown: true,
    }
  );

  return commentSerialized;
};
