export interface IAddressRequest {
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface IAddressResponse {
  id: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  zipcode: string;
}
