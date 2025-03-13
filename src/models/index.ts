export type RegisterUser = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
};
