import { IUserNoAdressRes } from '../user'

export interface ICommentsResponse {
  id: string
  description: string
  user: IUserNoAdressRes
}
