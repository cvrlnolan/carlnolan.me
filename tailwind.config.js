const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["IBM Plex Sans", ...fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
