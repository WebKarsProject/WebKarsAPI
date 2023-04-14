export interface IUserRequest {
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

export interface IUserResponse {
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
