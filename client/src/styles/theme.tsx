import React from "react";
import { ThemeProvider } from "styled-components";

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const theme = {
  fonts: {
    family: {
      default: `'Cormorant Garamond', serif`
    },
    size: {
      small: "1.5rem",
      medium: "2.5rem",
      large: "3.5rem",
    }    
  },
  colors: {
    black: "#1a1a1a",
    grey_light: "#bfbfbf",
  },
  bp: {
    phone: "375px",
    tablet: "600px",
    desktop: "1200px",
    large: "1800px",
  },
  shadow: "0 0 .25rem 0 #535657",
  shadowHover: "0 0 0.5rem 0 #535657",
};

export default Theme;
