import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { userSchemaNoAdressRet } from '../user'

export const commentsSchemaRet = yup.object().shape({
  id: yup.string().required(),
  description: yup.string().required(),
  user: userSchemaNoAdressRet
})

export const commentsSchemaReq = yup.object().shape({
  description: yup.string().required()
})
