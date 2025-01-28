import { useNavigate } from "react-router";
import { NavigatorContextType } from "./Context";

export const navigatorImpl: () => NavigatorContextType = () => {
  const navigate = useNavigate();
  return {
    registerPage() {
      navigate("/register");
    },
    loginPage() {
      navigate("/login");
    },
    homePage() {
      navigate("/");
    },
  };
};
