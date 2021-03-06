import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: "Montserrat";
    padding: 80px 65px 0;
}

button {
    padding: 0;
    cursor: pointer;
    font-family: "Montserrat";
}

ul {
    padding: 0;
    margin: 0;
}


`;

export default GlobalStyle