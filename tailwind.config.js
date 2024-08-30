const { transform, color } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        color: {
          darkGray: "#1e1e1e",
          vibrantRed: "#D7263D",
          darkRed: "#b5192f",
        },
        backgroundImage: {
          "red-dark-gradient": "linear-gradient(45deg, #D7263D, #1e1e1e)",
        },
      },
      animation: {
        "border-spin": "border-spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
