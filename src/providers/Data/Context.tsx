import { createContext, ReactNode, useContext } from "react";
import { LoginUser, RegisterUser, Product, User } from "../../models";

export type DataContextType = {
  registerUser: (req: RegisterUser) => Promise<User>;
  loginUser: (req: LoginUser) => Promise<User>;
  getProducts: () => Promise<Product[]>;
};

export const DataContext = createContext<DataContextType>({
  registerUser() {
    throw new Error("Not yet implemented");
  },
  loginUser() {
    throw new Error("Not yet implemented");
  },
  getProducts() {
    throw new Error("Not yet implemented");
  },
});

export type DataProviderProps = {
  value: DataContextType;
  children: ReactNode;
};

export const DataProvider = ({ children, value }: DataProviderProps) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextType => {
  return useContext(DataContext);
};
