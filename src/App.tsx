import React from "react";
import { hot } from "react-hot-loader";
import ProductsCompare from "./components/ProductsCompare";
import GlobalStyle from "./style/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ProductsCompare />
    </>
  );
};

export default hot(module)(App);
