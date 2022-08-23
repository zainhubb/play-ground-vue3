const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
    colors:{
      bgcolor:{
        light:"#ffffff",
        dark:"#2c2c32"
      },
      shallowblack:colors.neutral
    }
  },
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsn',
  ],
  plugins: [],
  variants: {
  },
}
