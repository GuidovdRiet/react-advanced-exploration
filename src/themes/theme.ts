// Themes
import chainelsTheme from "./chainelsTheme/chainelsTheme";
import whiteLabelTheme from "./whiteLabelTheme/whiteLabelTheme";

// Indexable Types, https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
const themes: {
  [key: string]: {
    primaryColor: string;
    secondaryColor: string;
    primaryFont: string;
    fontFaces: string;
  };
} = {
  chainelsTheme,
  whiteLabelTheme,
};

// Styles specifically for light & dark theme
interface themeStylesProps {
  [key: string]: {
    backgroundColor: string;
    cardTextColor: string;
    cardBackgroundColor: string;
    textColor: string;
  };
}

export const themeStyles: themeStylesProps = {
  light: {
    textColor: "#000",
    backgroundColor: "#FFFFFF",
    cardTextColor: "#444444",
    cardBackgroundColor: "#fff",
  },
  dark: {
    textColor: "#fff",
    backgroundColor: "#202020",
    cardTextColor: "#848484",
    cardBackgroundColor: "#000000",
  },
};

// Global styling for entire team
const globalStyles = {
  boxShadow: "0 5px 20px 13px rgba(0,0,0,.05)",
  fadeOut: "cubic-bezier(0.4, 0.01, 0.165, 0.99)",
  fontSmoothing: `
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,
  centerVerticalHorizontal: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

// Combine styles to one styling object
const theme = ({
  brand = "chainelsTheme",
  style = "light",
}: {
  brand: string;
  style: string;
}) => {
  const themeStyle = themeStyles[style];
  const theme = themes[brand];

  return {
    ...themeStyle,
    ...theme,
    ...globalStyles,
    style,
  };
};

export default theme;
