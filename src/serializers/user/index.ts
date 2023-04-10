import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUserRequest, IUserResponse } from '../../interfaces/user'

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({

  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  birthday: yup.date().required(),
  description: yup.string().required(),
  buyer: yup.boolean().required(),
})

const userWithoutPasswordSerializer: SchemaOf<IUserResponse> = yup.object().shape({

  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  birthday: yup.date().required(),
  description: yup.string().required(),
  buyer: yup.boolean().required(),
})

const usersSerializer = yup.array(userWithoutPasswordSerializer)

export { usersSerializer, userSerializer, userWithoutPasswordSerializer }