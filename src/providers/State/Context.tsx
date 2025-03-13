import { createContext, ReactNode, useContext } from "react";
import { User } from "../../models";

export type State = {
  user?: User;
};

export type StateDispatcherContextType = {
  updateUser: (user: User) => void;
};

export type StateSelectorContextType = {
  state: State;
};

export type StateContextType = StateDispatcherContextType &
  StateSelectorContextType;

export const StateContext = createContext<StateContextType>({
  state: {
    user: undefined,
  },
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

export const useDispatcher = (): StateDispatcherContextType => {
  const { updateUser } = useContext(StateContext);
  return {
    updateUser,
  };
};

export const useSelector = (): State => {
  const { state } = useContext(StateContext);
  return state;
};
