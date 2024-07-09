/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        acadia: "#34302d",
        "acadia-2": "#4c4742",
        "acadia-3": "#282522",
        finch: "#727C57",
        kelp: "#4A5039",
        gainsboro: "#D9D9D9",
        "gainsboro-2": "#C4C4C4",
        offwhite: "#FAF9F6",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translatey(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideUp: "slideUp 1.5s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
