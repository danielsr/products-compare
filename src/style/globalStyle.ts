import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
