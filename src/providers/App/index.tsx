import { PropsWithChildren } from "react";
import { NavigatorProvider } from "../Navigator";
import { navigatorImpl } from "../Navigator";
import { DataProvider } from "../Data/Context";
import { pocketBaseImpl } from "../Data/dataImpl";
import { stateImpl, StateProvider } from "../State";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <NavigatorProvider value={navigatorImpl()}>
      <StateProvider value={stateImpl()}>
        <DataProvider value={pocketBaseImpl()}>{children}</DataProvider>
      </StateProvider>
    </NavigatorProvider>
  );
};
