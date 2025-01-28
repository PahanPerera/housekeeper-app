import { createContext, ReactNode, useContext } from "react";

export type NavigatorContextType = {
  registerPage: () => void;
  loginPage: () => void;
  homePage: () => void;
};

export const NavigatorContext = createContext<NavigatorContextType>({
  registerPage() {},
  loginPage() {},
  homePage() {},
});

export type NavigatorProviderProps = {
  value: NavigatorContextType;
  children: ReactNode;
};

export const NavigatorProvider = ({
  children,
  value,
}: NavigatorProviderProps) => {
  return (
    <NavigatorContext.Provider value={value}>
      {children}
    </NavigatorContext.Provider>
  );
};

export const useNavigator = (): NavigatorContextType => {
  return useContext(NavigatorContext);
};
