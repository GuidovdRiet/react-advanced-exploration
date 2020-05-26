import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "./styles/global";
import "./App.css";

// Components
import Router from "./router/Router";
import createTheme from "./themes/theme";

// Brand options: whiteLabelTheme, chainelsTheme
// Style options: dark, light
const API_THEME = { brand: "whiteLabelTheme", style: "dark" };

function App() {
  const theme: DefaultTheme = createTheme(API_THEME);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
