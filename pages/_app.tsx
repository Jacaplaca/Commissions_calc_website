import "antd/dist/antd.css";
import "../styles/globals.css";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import themeLight from "../themes/themeLight";
import { MainContextProvider } from "../contexts/main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContextProvider>
      <StyledComponentThemeProvider theme={themeLight}>
        <Component {...pageProps} />
      </StyledComponentThemeProvider>
    </MainContextProvider>
  );
}
export default MyApp;
