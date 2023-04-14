import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserResponse } from "../../interfaces/user";

export const userSchemaReq: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  birthday: yup.date().required(),
  description: yup.string().notRequired(),
  buyer: yup.boolean().required(),
});

export const userSchemaUpdate: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().min(6).notRequired(),
  cpf: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  birthday: yup.date().notRequired(),
  description: yup.string().notRequired(),
  buyer: yup.boolean().notRequired(),
});

export const userSchemaReturned: SchemaOf<IUserResponse> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  birthday: yup.date().required(),
  description: yup.string().notRequired(),
  buyer: yup.boolean().required(),
});
