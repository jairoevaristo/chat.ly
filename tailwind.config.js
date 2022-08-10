/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "blue-200": "#04358066",
      "blue-300": "rgba(4, 53, 128, 0.70)",
      "blue-800": "#043580",
      "blue-900": "#021E48",
      "gray-200": "#F0F0F0",
      "gray-500": "#ACACAC",
      "gray-700": "#8D8D8D",
      "gray-800": "#757575",
      "gray-900": "#898989",
      "red-600": "#e74c3c",
      outside: "rgba(0, 0, 0, 0.80)",
      white: "#FFFFFF",
      "green-500": "#2ed573",
    },
    screens: {
      base: "490px",
      xs: "640px",
      sm: "768px",
      md: "924px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
