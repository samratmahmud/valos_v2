import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {"300": "#CAD0DB"},
        gray: {"50": "#ffffff"},
        neutral: {"500": "#7B8499"},
        cyan: {"400": "#00FFFF", "950": "#012141"},
        sky: {"500": "#0072FF"},
      },
      fontFamily: {
        montserrat: ["'Montserrat'", ...fontFamily.sans],
        manrope: ["'Manrope'", ...fontFamily.sans],
        inter: ["'inter'", ...fontFamily.sans],
        outfit: ["'Outfit'", ...fontFamily.sans],
      },
    },
    fontSize: {
      xs: ["7px", {lineHeight: "2.29em"}],
      sm: ["8px", {lineHeight: "2em"}],
      md: ["8px", {}],
      base: ["12px", {lineHeight: "1.33em"}],
      lg: ["14px", {lineHeight: "1.43em"}],
      xl: ["16px", {lineHeight: "1.5em"}],
      "2xl": ["18px", {lineHeight: "1.78em"}],
      "3xl": ["24px", {lineHeight: "1.46em"}],
      "4xl": ["25px", {lineHeight: "1.28em"}],
      "5xl": ["38px", {lineHeight: "1.29em"}],
      "6xl": ["46px", {lineHeight: "1.2em"}],
    },
    shadows: {
      sm: "200px 200px 200px",
      md: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      lg: "0px 4px 5px rgba(0, 114, 255, 0.16)",
      xl: "210px 210px 210px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
