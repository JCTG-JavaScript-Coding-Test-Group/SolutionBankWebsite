import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 7px;
    }

    body {
      color: ${(props) => props.theme.basicWhite};
      background-color: ${(props) => props.theme.programmersNavy};
    }

    input::-webkit-calendar-picker-indicator {
      display: none !important;
    }

    ul, ol {
      list-style: none;
    }

    button {
      background-color: none;
      border: none;
    }

`;
