import { IAddressReq, IAddressRes, IAddressUpdateReq } from "../address";

export interface IUserReq {
  name: string;
  email: string;
  zipCode: string;
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
  zipCode?: string;
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
  zipCode: string;
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
