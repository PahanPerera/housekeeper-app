import { useData } from "../../providers/Data/Context";
import { useAppState } from "../../providers/State";
import { useAsyncFn } from "react-use";

export const useRegister = () => {
  const { registerUser: registerUserApi } = useData();
  const { updateUser: updateUserState } = useAppState();

  const [state, call] = useAsyncFn(async (req) => {
    const user = await registerUserApi(req);
    updateUserState(user);
    return user;
  });

  return {
    ...state,
    call,
  };
};
