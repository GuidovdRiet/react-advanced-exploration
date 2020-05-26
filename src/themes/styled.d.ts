import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    primaryFont: string;
    fontFaces: string;
    boxShadow: string;
    fadeOut: string;
    fontSmoothing: string;
    centerVerticalHorizontal: string;
    style: string;
    backgroundColor: string;
    cardTextColor: string;
    cardBackgroundColor: string;
    textColor: string;
  }
}
