/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1800px",
    },
    colors: {
      red: "#B9345A",
      navy: "#03203C",
      gray: "#758283",
      white: "#ffffff",
      dark: "#222222;",
      lightGray: "#D3D3D3",
      black: "#1B2430",
    },
  },
  plugins: [],
};
