import chainelsTypefaces from "./chainelsTypefaces";
import generateFontFaceCSS from "../generateFontFaceCSS";

const chainelsTheme = {
  primaryColor: "#FC1468",
  secondaryColor: "#6497F1",
  primaryFont: "OpenSans",
  fontFaces: generateFontFaceCSS(chainelsTypefaces),
};

export default chainelsTheme;
