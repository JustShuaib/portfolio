/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      fontFamily: {
        "source-code": "'Source Code Pro', monospace",
      },
      animation: {
        typewriter: "typing 3.5s steps(30, end)",
      },
      keyframes: {
        typing: {
          from: { width: 0 },
          to: { width: "100%", borderRight: "none" },
        },
      },
    },
  },
  plugins: [],
};
