/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005974',
        secondary:'#0B8BA6'
      },
      fontFamily: {
        dm: ['"DM Sans"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}