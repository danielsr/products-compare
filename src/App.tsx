import React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyle";
import { theme } from "style/theme";
import ProductsCompare from "pages/ProductsCompare";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsCompare />
    </ThemeProvider>
  );
};

export default hot(module)(App);
