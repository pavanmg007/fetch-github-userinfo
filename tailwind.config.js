/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      fontmono: ['"Space Mono"', "monospace"],
    },
    extend: {
      colors: {
        "sky-blue": "#0079FF",
        "light-grey": "#697C9A",
        "navy-blue": "#4B6A9B",
        "dark-grey": "#2B3442",
        snow: "#F6F8FF",
        "slight-dark-white": "#FEFEFE",
        "dark-mode-bg": "hsl(220, 40%, 13%)",
        "dark-blue": "#1E2A47",
        "dark-white": "#F6F8FF",
      },
    },
  },
  plugins: [],
};
