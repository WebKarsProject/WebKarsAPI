import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { userSchemaNoAdressRet } from '../user'

export const imageSchemaRet = yup.object().shape({
  id: yup.string().required(),
  img_url: yup.string().required()
})

export const imageSchemaReq = yup.object().shape({
  img_url: yup.string().required()
})
