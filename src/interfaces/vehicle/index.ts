export interface IVehicleRequest {
  brand: string;
  model: string;
  year: Date;
  fuel: string;
  mileage: number;
  price: number;
  fipe: number;
  description: string;
  published: boolean;
}

export interface IVehicleResponse {
  brand: string;
  model: string;
  year: Date;
  fuel: string;
  mileage: number;
  price: number;
  fipe: number;
  description: string;
  published: boolean;
}

export interface IVehicleUpdate {
  brand?: string;
  model?: string;
  year?: Date;
  fuel?: string;
  mileage?: number;
  price?: number;
  fipe?: number;
  description?: string;
  published?: boolean;
}
