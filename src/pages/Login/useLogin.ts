import { useAsyncFn } from "react-use";
import { useData } from "../../providers/Data/Context";
import { LoginUser } from "../../models";
import { useAppState } from "../../providers/State";

export const useLogin = () => {
  const { loginUser } = useData();
  const { updateUser } = useAppState();

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
