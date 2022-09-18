/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Verdana", "sans-serif"]
    },
    extend: {
      animation: {
        spinSlow: "spin 0.75s linear infinite",
        dash: "dash 1s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
