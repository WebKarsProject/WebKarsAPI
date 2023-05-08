import { IUserName, IUserNoAdressRes } from '../user';

export interface ICommentsResponse {
  id: string;
  description: string;
  user: IUserName;
}

export interface ICommentsReq {
  description: string;
}

export interface ICommentsUpdate {
  description?: string;
}

export interface ICommentsResponseUpdate {
  id?: string;
  description: string;
  user: IUserName;
}
