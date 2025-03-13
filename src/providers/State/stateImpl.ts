import { useReducer } from "react";
import { State, StateContextType } from "./Context";
import { User } from "../../models";

type Action = { type: "user/update"; data: User };

type Reducer<S, A> = (prevState: S, action: A) => S;

const reducer: Reducer<State, Action> = (prevState: State, action: Action) => {
  if (action.type === "user/update") {
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
    state,
    updateUser(user) {
      dispatch({ type: "user/update", data: user });
    },
    clearUser() {},
  };
};
