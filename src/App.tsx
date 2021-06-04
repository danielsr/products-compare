import React from "react";
import { hot } from "react-hot-loader";
import GlobalStyle from "./style/globalStyle";
import ProductsCompare from "./components/ProductsCompare";
import Container from "./elements/Container";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ProductsCompare />
      </Container>
    </>
  );
};

export default hot(module)(App);
