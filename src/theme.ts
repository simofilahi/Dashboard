const palette = {
  tealBlue: { main: "#03a9f4", light: "#b3e5fc", dark: "#01579b" },
  blue: { main: "#2196f3", light: "#bbdefb", dark: "#0d47a1" },
  green: { main: "#00e676", light: "#c8e6c9", dark: "#1b5e20  " },
  purple: { main: "#9c27b0", light: "#e1bee7", dark: "#4a148c" },
  orange: { main: "#f57c00", light: "#ffe0b2", dark: "#e65100" },
  pink: { main: "#e91e63", light: "#f8bbd0", dark: "#880e4f" },
  grey: { main: "#9e9e9e", light: "#f5f5f5", dark: "#212121" },
  black: { main: "#000000", light: "", dark: "" },
  white: { main: "#ffffff", light: "", dark: "" },
};

const screens = {
  sm: "480px",
  md: "768px",
  lg: "976px",
  xl: "1440px",
};

const spacing = {
  8: "0.5rem",
  16: "1rem",
  24: "1.5rem",
  32: "2rem",
};

const fontFamily = {
  sans: ["Roboto", "sans-serif"],
  serif: ["Roboto", "serif"],
};

const opacity = {
  "0": "0",
  "20": "0.2",
  "40": "0.4",
  "60": "0.6",
  "80": "0.8",
  "100": "1",
};

const fontSize = {
  xs: ".75rem",
  sm: ".875rem",
  tiny: ".875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "5rem",
};

const letterSpacing = {
  tightest: "-.075em",
  tighter: "-.05em",
  tight: "-.025em",
  normal: "0",
  wide: ".025em",
  wider: ".05em",
  widest: ".1em",
};

export default {
  palette,
  spacing,
  screens,
  fontFamily,
  opacity,
  fontSize,
  letterSpacing,
};
