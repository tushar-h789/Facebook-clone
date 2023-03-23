/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#7000A5',
      },
      fontFamily:{
        nun: ['Nunito', 'sans-serif']
      },
      colors:{
        primary: "#0D8BF0"
      }
    },
  },
  
  plugins: [],
}
