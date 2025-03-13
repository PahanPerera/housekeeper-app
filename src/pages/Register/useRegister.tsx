import { useData } from "../../providers/Data/Context";
import { useAsyncFn } from "react-use";
import { useDispatcher } from "../../providers/State";

export const useRegister = () => {
  const { registerUser: registerUserApi } = useData();
  const { updateUser: updateUserState } = useDispatcher();

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
