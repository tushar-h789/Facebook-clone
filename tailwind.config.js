/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#0D8BF0",
        black: "#303131"
      },
      fontFamily:{
        nun: ['Nunito', 'sans-serif']
      },
    },
  },
  
  plugins: [],
}
