import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

body {
  color: #FFFF;
  font-family: 'Montserrat', sans-serif;
  background-color:  #03071E;
}

main {
  width: 100%;
}
`;

export default GlobalStyles;
