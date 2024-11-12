import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bright-orange": "#FDA214",
      "light-gray-blue": "#BCCED9",
      "dark-blue-gray": "#304859",
      "dark-blue": "#152938",
      "light-gray": "#F2F2F2",
      "blue-gray": "#7191A5",
      blue: "#6395B8",
      white: "#FCFCFC",

      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
    },
    fontSize: {
      base: "1.125rem",
      lg: "1.25rem",
      xl: "2ren",
      "2xl": "2.75rem",
      "3xl": "3rem",
      "4xl": "3.75rem",
    },
    extend: {
      fontFamily: {
        "atkinson-hyperlegible": [
          "Atkinson Hyperlegible",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
