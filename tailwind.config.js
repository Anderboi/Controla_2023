const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      19: "76px",
      20: "80px",
      21: "84px",
      22: "88px",
      23: "92px",
      24: "96px",
      25: "100px",
      26: "104px",
      27: "108px",
      28: "112px",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "15px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "36px",
      "4xl": "48px",
      "5xl": "3.052rem",
      huge: "90px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: { dark: "#fff" },
        black: { dark: "#000" },
        "primary-bg": { dark: "#000", light: "#F7F7F7" },
        "secondary-bg": { dark: "#121212", light: "#FFFFFF" },
        "elevated-1-bg": { dark: "#181818" },
        "elevated-2-bg": { dark: "#232323" },
        "elevated-3-bg": { dark: "#363636" },
        "elevated-4-bg": { dark: "#404040" },
        "transparent-bg": { dark: "#CECECE" },
        "primary-text": { dark: "#E1E3E6", light: "#000000" },
        "secondary-text": { dark: "#969A9F", light: "#9C9C9C" },
        "tertiary-text": { dark: "#5D5F61", light: "#616161" },
        "primary-border": { dark: "#262626", light: "#e1e1e1" },
        accent: { light: "#118A65", dark: "#1EAB7D" },
        green: { dark: "#B0D1AD", light: "#D0E9BC" },
        blue: { dark: "#ACCFD2", light: "#A2DEE6" },
      },
      dropShadow: {
        spt: "0 8px 24px rgba(0,0,0,.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        sideDialogOverlay: "overlayShow .3s cubic-bezier(0.16, 1, 0.3, 1)",
        sideDialogContent: "contentShowSide .3s cubic-bezier(0.16, 1, 0.3, 1)",
        centerOverlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        centerContentShow:
          "contentShowCenter 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShowSide: {
          from: { opacity: 0, transform: "translate(100%, 0)" },
          to: { opacity: 1, transform: "translate(0, 0)" },
        },
        contentShowCenter: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
    require("@tailwindcss/forms"),
  ],
};
