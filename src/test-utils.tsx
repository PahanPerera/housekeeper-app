import { PropsWithChildren } from "react";
import { DataContextType, DataProvider } from "./providers/Data/Context";
import { NavigatorContextType, NavigatorProvider } from "./providers/Navigator";
import { StateContextType, StateProvider } from "./providers/State";
import { vi } from "vitest";

export const getTestContext = () => {
  const mockNavigatorImpl: NavigatorContextType = {
    homePage: vi.fn(),
    registerPage: vi.fn(),
  };

  const mockStateImpl: StateContextType = {
    user: undefined,
    updateUser: vi.fn(),
  };

  const mockDataImpl: DataContextType = {
    registerUser: vi.fn(),
  };

  const TestAppProviders = ({ children }: PropsWithChildren) => {
    return (
      <NavigatorProvider value={mockNavigatorImpl}>
        <StateProvider value={mockStateImpl}>
          <DataProvider value={mockDataImpl}>{children}</DataProvider>
        </StateProvider>
      </NavigatorProvider>
    );
  };

  return {
    wrapper: TestAppProviders,
    navigatorContext: mockNavigatorImpl,
    dataContext: mockDataImpl,
    stateContext: mockStateImpl,
  };
};
