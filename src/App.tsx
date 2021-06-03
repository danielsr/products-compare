import React from "react";
import { hot } from "react-hot-loader";
import ProductsComparison from "./components/ProductsComparison";
import GlobalStyle from "./style/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ProductsComparison />
    </>
  );
};

export default hot(module)(App);
