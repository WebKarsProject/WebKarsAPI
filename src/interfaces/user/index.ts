export interface IUserReq {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  birthday: Date;
  description: string;
  buyer: boolean;
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
  cpf: string;
  phone: string;
  birthday: Date;
  description: string;
  buyer: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}
