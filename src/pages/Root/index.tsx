import { Outlet } from "react-router";
import { useNavigator } from "../../providers/Navigator";
import { useSelector } from "../../providers/State";

type NavButtonProps = {
  name: string;
  navigate: () => void;
};

const NavButton = ({ name, navigate }: NavButtonProps) => {
  return (
    <button
      className="text-lg hover:underline cursor-pointer"
      onClick={() => navigate()}
    >
      {name}
    </button>
  );
};

export const Root = () => {
  const { registerPage } = useNavigator();
  const { loginPage } = useNavigator();
  const { user } = useSelector();
  return (
    <>
      <header className="p-4 bg-amber-200 flex justify-center">
        <h1 className="text-3xl font-semibold">
          My Personal Assistant <span>{user?.email}</span>
        </h1>
        <span className="flex-1"></span>
        <div className="flex justify-center gap-3">
          <NavButton name="Register" navigate={registerPage} />
          <NavButton name="Login" navigate={loginPage} />
        </div>
      </header>
      <Outlet />
    </>
  );
};
