import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { userSchemaNoAdressRet } from '../user'
import { imageSchemaReq, imageSchemaRet } from '../image'
import { commentsSchemaRet } from '../comments'

export const vehiclesSchemaReq: SchemaOf<any> = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  mileage: yup.number().required(),
  price: yup.number().required(),
  fipe: yup.number().required(),
  description: yup.string().required(),
  published: yup.boolean().required(),
  // color: yup.string().required(),
  images: yup.array(imageSchemaReq).required()
})

export const vehiclesSchemaRet: SchemaOf<any> = yup.object().shape({
  id: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  mileage: yup.number().required(),
  price: yup.number().required(),
  fipe: yup.number().required(),
  description: yup.string().required(),
  published: yup.boolean().required(),
  // color: yup.string().notRequired(),
  user: userSchemaNoAdressRet,
  images: yup.array(imageSchemaRet).required(),
  comments: yup.array(commentsSchemaRet).required()
})

export const vehiclesSchemaCreateRet: SchemaOf<any> = yup.object().shape({
  id: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  mileage: yup.number().required(),
  price: yup.number().required(),
  fipe: yup.number().required(),
  description: yup.string().required(),
  published: yup.boolean().required(),
  // color: yup.string().required(),
  user: userSchemaNoAdressRet
})
