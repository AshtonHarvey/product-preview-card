/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      "Dark-cyan": "hsl(158, 36%, 37%)",
      Cream: "hsl(30, 38%, 92%)",
      "Very-dark-blue": "hsl(212, 21%, 14%)",
      "Dark-grayish-blue": "hsl(228, 12%, 48%)",
      White: "hsl(0, 0%, 100%)",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      "widest-two": ".25em",
      "widest-three": ".4em",
    },
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
