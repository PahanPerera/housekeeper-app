import { useReducer } from "react";
import { StateContextType } from "./Context";
import { User } from "../../models";

type State = {
  user?: User;
};
type Action = { type: "UPDATE_USER"; data: User };

type Reducer<S, A> = (prevState: S, action: A) => S;

const reducer: Reducer<State, Action> = (prevState: State, action: Action) => {
  if (action.type === "UPDATE_USER") {
    return {
      ...prevState,
      user: action.data,
    };
  }
  return prevState;
};

export const stateImpl: () => StateContextType = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {});
  return {
    user: state.user,
    updateUser(user) {
      dispatch({ type: "UPDATE_USER", data: user });
    },
    clearUser() {},
  };
};
