import React, { FC } from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

const App: FC = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
