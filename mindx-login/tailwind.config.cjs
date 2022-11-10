/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      primary: "#FCC600",
      secondary: "#222222",
      transparent: "transparent",
      gray: "#454545",
      white: "#DFF8EB",
      red: "#E5625E",
      blue: "#00CEE0",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      ss: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
