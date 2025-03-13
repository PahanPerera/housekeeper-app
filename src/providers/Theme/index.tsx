import { MantineProvider, createTheme } from "@mantine/core";
import { PropsWithChildren } from "react";

const theme = createTheme({
  fontFamily: "Genos, sans-serif",
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
