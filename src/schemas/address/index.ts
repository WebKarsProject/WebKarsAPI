import * as yup from "yup";
import { SchemaOf } from "yup";

export const AddressSchemaReq: SchemaOf<any> = yup.object().shape({
  street: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipcode: yup.string().required(),
});
