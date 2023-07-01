/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: { dark: "#fff" },
      black: { dark: "#000" },
      "primary-bg": { dark: "#000", light: "#fff" },
      "secondary-bg": { dark: "#121212", light: "#F7F7F7" },
      "transparent-bg": { dark: "#CECECE" },
      "primary-text": { dark: "#dddddf" },
      "secondary-text": { dark: "#b3b3b3", light: "#9C9C9C" },
      "primary-border": { dark: "#505155" },
      accent: { light: "#1AB17B", dark: "#4FD1A2" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
