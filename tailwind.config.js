/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      zIndex: {
        behind: -1,
        excessive: 999999,
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        allura: ["Allura", "cursive"],
      },
      colors: {
        primary: "#d68e96",
        secondary: "#6b8666",
        tertiary: "#000",
      },
    },
  },
  plugins: [],
};
