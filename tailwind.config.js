const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: { dark: "#fff" },
        black: { dark: "#000" },
        "primary-bg": { dark: "#000", light: "#fff" },
        "secondary-bg": { dark: "#121212", light: "#F7F7F7" },
        // "elevated-1-bg": { dark: "#181818" },
        "elevated-1-bg": { dark: "#242424" },
        // "elevated-2-bg": { dark: "#242424" },
        "elevated-2-bg": { dark: "#303030" },
        "elevated-3-bg": { dark: "#363636" },
        "elevated-4-bg": { dark: "#404040" },
        "transparent-bg": { dark: "#CECECE" },
        "primary-text": { dark: "#fff" },
        "secondary-text": { dark: "#A3A3A3", light: "#9C9C9C" },
        "primary-border": { dark: "#505155" },
        accent: { light: "#1AB17B", dark: "#4FD1A2" },
      },
      dropShadow: {
        spt: "0 8px 24px rgba(0,0,0,.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".scrolling-touch": { "-webkit-overflow-scrolling": "touch" },
      });
    }),
  ],
};
