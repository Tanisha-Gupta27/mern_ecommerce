/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themecolor:{
          600:"#db2777"
        }
      }
    },
  },
  plugins: [],
}