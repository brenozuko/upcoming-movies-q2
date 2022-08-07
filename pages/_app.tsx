import type { AppProps } from "next/app";

// GLOBAL STYLES
import GlobalStyle from "../config/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
