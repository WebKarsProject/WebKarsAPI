import { Request, Response } from 'express'
import { IUserRequest } from '../../interfaces/user'
import { createUserService } from '../../services/user/createUser.service'


const createUserController = async (req: Request, res: Response) => {

  const data: IUserRequest = req.body
  const user = await createUserService(data)

  return res.status(201).json(user)
}

export { createUserController }