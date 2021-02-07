import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;

    body {
      font-family: 'Roboto', sans-serif;
      background: #eaeded;

      * {
        margin : 0;
        padding : 0;
        box-sizing: border-box;
      }

      h1 {
        font-size : 2.1rem;
      }

      h2 {
        font-size: 1.4rem
      }
    }
  }

`;

export default GlobalStyle;
