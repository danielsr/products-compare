import React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyle";
import { theme } from "style/theme";
import Container from "./elements/Container";
import ProductsCompare from "./components/ProductsCompare";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <ProductsCompare />
      </Container>
    </ThemeProvider>
  );
};

export default hot(module)(App);
