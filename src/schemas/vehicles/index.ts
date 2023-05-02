import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { userSchemaNoAdressRet } from '../user'
import { imageSchemaReq, imageSchemaRet } from '../image'
import { commentsSchemaRet, commentsSchemaReturnOnlyInfo } from '../comments'
import { IVehicleCreatedResponse, IVehicleRetriveResponse, IVehicleUpdate, IVehicleWithImageRequest, IVehiclesAll, IVehiclesUser } from '../../interfaces/vehicle'

export const vehiclesSchemaReq: SchemaOf<IVehicleWithImageRequest> = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  mileage: yup.number().required(),
  price: yup.number().required(),
  fipe: yup.number().required(),
  description: yup.string().required(),
  published: yup.boolean().required(),
  color: yup.string().required(),
  images: yup.array(imageSchemaReq).required().nullable()
})

export const vehiclesSchemaRet: SchemaOf<IVehicleRetriveResponse> = yup.object().shape({
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
  color: yup.string().required(),
  user: userSchemaNoAdressRet,
  images: yup.array(imageSchemaRet).required().nullable(),
  comments: yup.array(commentsSchemaRet).required()
})

export const vehiclesSchemaCreateRet: SchemaOf<IVehicleCreatedResponse> = yup.object().shape({
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
  color: yup.string().required(),
  user: userSchemaNoAdressRet
})

export const vehiclesUserReturn: SchemaOf<IVehiclesUser> = yup.object().shape({
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
  images: yup.array(imageSchemaRet).required().nullable(),
  comments: yup.array(commentsSchemaRet).required().nullable(),
  color: yup.string().required()
})

export const vehiclesAllReturn: SchemaOf<IVehiclesAll> = yup.object().shape({
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
  images: yup.array(imageSchemaRet).required().nullable(),
  user: userSchemaNoAdressRet,
  color: yup.string().required()
})

export const vehicleUpdateSchema: SchemaOf<IVehicleUpdate> = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  mileage: yup.number().notRequired(),
  price: yup.number().notRequired(),
  fipe: yup.number().notRequired(),
  description: yup.string().notRequired(),
  published: yup.boolean().notRequired(),
  color: yup.string().notRequired()
})

export const listVehicleUser: SchemaOf<IVehiclesUser[]> = yup.array(vehiclesUserReturn)
