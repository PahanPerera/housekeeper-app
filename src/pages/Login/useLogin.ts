import { useAsyncFn } from "react-use";
import { useData } from "../../providers/Data/Context";
import { LoginUser } from "../../models";
import { useDispatcher } from "../../providers/State";

export const useLogin = () => {
  const { loginUser } = useData();
  const { updateUser } = useDispatcher();

  const [state, call] = useAsyncFn(async (req: LoginUser) => {
    const user = await loginUser(req);
    updateUser(user);
    return user;
  });
  return {
    ...state,
    call,
  };
};
