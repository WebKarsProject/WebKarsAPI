import { IAddressReq, IAddressRes, IAddressUpdateReq } from "../address";

export interface IUserReq {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  birthday: Date;
  description: string;
  buyer: boolean;
  address: IAddressReq;
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
}

export interface IUserRes {
  id: string;
  name: string;
  email: string;
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
