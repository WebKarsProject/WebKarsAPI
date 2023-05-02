import AppDataSource from '../../data-source';
import Comment from '../../entities/comments';

const removeCommentService = async (id: string) => {
  const commentsRepository = AppDataSource.getRepository(Comment);

  const comment = await commentsRepository.findOneBy({ id: id });

  await commentsRepository.remove(comment);
};

export default removeCommentService;
