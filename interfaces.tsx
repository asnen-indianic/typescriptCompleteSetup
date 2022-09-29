export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: string;
}
export interface Address {
  stree: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}
export interface Geolocation {
  lat: string;
  lng: string;
}
export interface company {
  name: string;
  catchPhrase: string;
  bs: string;
}
