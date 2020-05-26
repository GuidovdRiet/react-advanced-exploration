import { createGlobalStyle } from "styled-components";
import { themeStyles } from "../themes/theme";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => theme.fontFaces}
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.primaryFont};
    ${({ theme }) => theme.style === "dark" && theme.fontSmoothing}
    background-color: ${({ theme }) =>
      theme.style === "light"
        ? themeStyles.light.backgroundColor
        : themeStyles.dark.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default GlobalStyle;
