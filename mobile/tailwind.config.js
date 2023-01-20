/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      fontFamily: {
        regular: 'FiraCode_400Regular',
        semibold: 'FiraCode_600SemiBold',
        bold: 'FiraCode_700Bold',
        extrabold: 'FiraCode_800ExtraBold'
      }
    },
  },
  plugins: [],
}