/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.tsx",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6B1011",
        secondary: "#F3E29C",
        ternary: "#272757",
        forty: "#D9D9D9",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-h1": {
          fontFamily: "ElMessiri", // ✅ must be a string
          fontSize: 24,
          fontWeight:"500",
          letterSpacing: 0,
        },
        ".text-body": {
          fontFamily: "ElMessiri", // ✅ same here
          fontSize: 16,
          fontWeight: "400",
        },
        ".text-body-2": {
          fontFamily: "ElMessiri", // ✅ same here
          fontSize: 14,
          fontWeight: "400",
        },
        ".text-body-3": {
          fontFamily: "ElMessiri", // ✅ same here
          fontSize: 12,
        },
        ".text-body-4": {
          fontFamily: "ElMessiri", // ✅ same here
          fontSize: 10,
        },
         ".text-body-5": {
          fontFamily: "ElMessiri", // ✅ same here
          fontSize: 8,
        },
         ".text-body-6": {
          fontFamily: "ElMessiri", // ✅ same here
          fontSize: 6,
        },
      });
    },
  ],
};
