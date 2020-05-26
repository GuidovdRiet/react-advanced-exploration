import whiteLabelTypefaces from "./whiteLabelTypeFaces";
import generateFontFaceCSS from "../generateFontFaceCSS";

const whiteLabelTheme = {
  primaryColor: "#FC1468",
  secondaryColor: "#6497F1",
  primaryFont: "Poppins",
  fontFaces: generateFontFaceCSS(whiteLabelTypefaces),
};

export default whiteLabelTheme;
