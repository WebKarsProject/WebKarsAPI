import { IimageReq } from '../images'

export interface IVehicleRequest {
  brand: string
  model: string
  year: Date
  fuel: string
  mileage: number
  price: number
  fipe: number
  description: string
  published: boolean
}

export interface IVehicleWithImageRequest {
  brand: string
  model: string
  year: Date
  fuel: string
  mileage: number
  price: number
  fipe: number
  description: string
  published: boolean
  images: IimageReq[]
}

export interface IVehicleResponse {
  brand: string
  model: string
  year: Date
  fuel: string
  mileage: number
  price: number
  fipe: number
  description: string
  published: boolean
}

export interface IVehicleUpdate {
  brand?: string
  model?: string
  year?: Date
  fuel?: string
  mileage?: number
  price?: number
  fipe?: number
  description?: string
  published?: boolean
}
