import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType}>`
*{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Raleway',sans-serif;
}

input:-webkit-autofill {
  background-color: transparent !important;
  box-shadow: 0 0 0 50px ${(props)=>props.theme.colors.primary} inset;
}

button{
    font-weight: bold;
}

body{
    background-color: ${(props)=>props.theme.colors.primary};
}
`