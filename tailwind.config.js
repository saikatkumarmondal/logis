/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flyWithWave: {
          "0%": { transform: "translateX(-100%) translateY(0) rotate(-15deg)" },
          "25%": {
            transform: "translateX(-50%) translateY(-10px) rotate(-10deg)",
          },
          "50%": { transform: "translateX(0%) translateY(0) rotate(-5deg)" },
          "75%": {
            transform: "translateX(50%) translateY(10px) rotate(-10deg)",
          },
          "100%": {
            transform: "translateX(100%) translateY(0) rotate(-15deg)",
          },
        },
      },
      animation: {
        flyWithWave: "flyWithWave 12s linear infinite",
      },
    },
  },
  plugins: [],
};
