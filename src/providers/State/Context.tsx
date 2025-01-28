import { createContext, ReactNode, useContext } from "react";
import { User } from "../../models";

export type StateContextType = {
  user: User | undefined;
  updateUser: (user: User) => void;
};

export const StateContext = createContext<StateContextType>({
  user: undefined,
  updateUser() {
    throw new Error("not yet implemented");
  },
});

export type StateProviderProps = {
  value: StateContextType;
  children: ReactNode;
};

export const StateProvider = ({ children, value }: StateProviderProps) => {
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useAppState = (): StateContextType => {
  return useContext(StateContext);
};
