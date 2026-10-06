import { MantineProvider } from "@mantine/core";
import { useSelector } from "react-redux";

const ThemeProviderWrapper = ({ theme, children }: any) => {
  const mode = useSelector((state: any) => state.theme.mode);

  return (
    <MantineProvider theme={theme} forceColorScheme={mode}>
      {children}
    </MantineProvider>
  );
};

export default ThemeProviderWrapper;