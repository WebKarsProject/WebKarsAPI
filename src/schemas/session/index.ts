import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin } from "../../interfaces/user";

export const sessionSchemasReq: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email("Must be a valid email").required(),
  password: yup.string().required(),
});
