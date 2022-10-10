import "../styles/globals.css";
import type { AppProps } from "next/app";

import "../app.css";
import "../src/components/Vehicles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
