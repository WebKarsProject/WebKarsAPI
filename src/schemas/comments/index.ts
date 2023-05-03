import * as yup from 'yup';
import { userSchemaOnlyName } from '../user';

export const commentsSchemaRet = yup.object().shape({
  id: yup.string().required(),
  description: yup.string().required(),
  createdAt: yup.string().required(),
  user: userSchemaOnlyName,
});

export const commentsSchemaReq = yup.object().shape({
  description: yup.string().required(),
});

export const commentsSchemaReturnOnlyInfo = yup.object().shape({
  id: yup.string().required(),
  description: yup.string().required(),
  createdAt: yup.string().required(),
});
