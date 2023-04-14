import { IAddressRes, IAddressUpdateReq } from "../address";

export interface IUserReq {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  birthday: Date;
  description: string;
  buyer: boolean;
  address: IAddressRes;
}

export interface IUserUpdateReq {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  password?: string;
  birthday?: Date;
  description?: string;
  buyer?: boolean;
  address?: IAddressUpdateReq;
}

export interface IUserRes {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthday: Date;
  description: string;
  buyer: boolean;
  address: IAddressRes;
}

export interface IUserLogin {
  email: string;
  password: string;
}
