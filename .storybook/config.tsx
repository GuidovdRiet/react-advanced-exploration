// https://dev.to/tomekbuszewski/default-styles-in-storybook-with-styled-components-58dp
import * as React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import GlobalStyle from "../src/styles/global";
import createTheme from "../src/themes/theme";

const req = require.context("../../", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const API_THEME = { brand: "whiteLabelTheme", style: "dark" };

const withGlobal = (cb) => {
  const theme: DefaultTheme = createTheme(API_THEME);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {cb()}
      </ThemeProvider>
    </React.Fragment>
  );
};

addDecorator(withGlobal);
configure(loadStories, module);
