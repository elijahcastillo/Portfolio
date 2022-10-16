// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/

* {
  margin: 0;
      //outline: 1px solid green;
}

/*
  3. Allow percentage-based heights in the application
*/


body{
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainBackground};
}


img {
    max-width: 100%;
    height: auto;
    width: auto\9;
}

`;

export default GlobalStyle;
