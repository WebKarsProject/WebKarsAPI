import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IAddressReq,
  IAddressRes,
  IAddressUpdateReq,
} from "../../interfaces/address";

export const AddressSchemaReq: SchemaOf<IAddressReq> = yup.object().shape({
  street: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().notRequired(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipcode: yup.string().required(),
});

export const AddressSchemaUpdate: SchemaOf<IAddressUpdateReq> = yup
  .object()
  .shape({
    street: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired(),
    city: yup.string().notRequired(),
    state: yup.string().notRequired(),
    zipcode: yup.string().notRequired(),
  });

export const AddressSchemaRet: SchemaOf<IAddressRes> = yup.object().shape({
  id: yup.string().required(),
  street: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().notRequired(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipcode: yup.string().required(),
});
