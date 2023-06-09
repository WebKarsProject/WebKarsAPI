import { ICommentsResponse, ICommentsReq } from '../comments'
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
export interface IVehiclesUser {
  id: string
  brand: string
  model: string
  year: string
  fuel: string
  mileage: number
  price: number
  fipe: number
  description: string
  images: IimageReq[]
  comments: ICommentsReq[]
  published: boolean
}

export interface IVehiclesAll {
  id: string
  brand: string
  model: string
  year: string
  fuel: string
  mileage: number
  price: number
  fipe: number
  description: string
  images: IimageReq[]
  user: IUserNoAdressRes
  published: boolean
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
  images?: IimageReq[]
}
