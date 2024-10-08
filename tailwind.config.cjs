/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0B132B",
        secondary: "#FFFFFF",
        tertiary: "#6830C390",
        "black-100": "#150D49",
        "black-200": "#0F0246",
        "white-100": "#FFFFFF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      }
    },
  },
  plugins: [],
};