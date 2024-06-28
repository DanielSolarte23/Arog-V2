/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-principal': '#72aa00',
        'Gris': '#d1d1d1',
        'Cafe-Footer':'#635B4F'
      },
      fontFamily: {
        "ablack": 'ArchivoBlack',
        "lexend": 'Lexend'
      }
    },
  },
  plugins: [],
}

