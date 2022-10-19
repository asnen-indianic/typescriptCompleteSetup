export interface User {
  cart: boolean;
  quentity: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
export interface UserList {
  userName: string;
  id: number;
}
export interface signups {
  name?: string;
  email?: string;
  password?: string;
}
