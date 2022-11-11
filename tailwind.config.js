/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./icons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Mukta", "sans-serif"],
    },
    extend: {
      colors: {
        "royal-blue": "#0070f3",
        "light-grey": "#eaeaea",
        "off-white": "#fafafa",
        "box-bg": "#1b1b1d",
      },
      animation: {
        "slide-in": "slide-in 0.7s ease-in-out",
      },
      keyframes: {
        "slide-in": {
          from: { transform: "translateX(100rem)" },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
