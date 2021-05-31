import React from "react";
import { hot } from "react-hot-loader";
import GlobalStyle from "./style/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default hot(module)(App);
