export interface IAddressReq {
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface IAddressUpdateReq {
  street?: string;
  number?: string;
  complement?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

export interface IAddressRes {
  id: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  zipcode: string;
}
