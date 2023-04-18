import { ICommentsResponse } from '../comments'
import { IimageReq } from '../images'
import { IUserNoAdressRes } from '../user'

export interface IVehicleRequest {
  brand: string
  model: string
  year: string
  fuel: string
  color: string
  mileage: number
  price: number
  fipe: number
  description: string
  published: boolean
}

export interface IVehicleWithImageRequest {
  brand: string
  model: string
  year: string
  fuel: string
  color: string
  mileage: number
  price: number
  fipe: number
  description: string
  published: boolean
  images: IimageReq[]
}

export interface IVehicleRetriveResponse {
  id: string
  brand: string
  model: string
  year: string
  fuel: string
  color: string
  mileage: number
  price: number
  fipe: number
  description: string
  published: boolean
  images: IimageReq[]
  comments: ICommentsResponse[]
}

export interface IVehicleCreatedResponse {
  id: string
  brand: string
  model: string
  year: string
  fuel: string
  mileage: number
  price: number
  fipe: number
  description: string
  published: boolean
  user: IUserNoAdressRes
}

export interface IVehicleUpdate {
  brand?: string
  model?: string
  year?: string
  fuel?: string
  color?: string
  mileage?: number
  price?: number
  fipe?: number
  description?: string
  published?: boolean
}
