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
      },
      fontFamily: {
        "ablack": 'ArchivoBlack',
        "lexend": 'Lexend'
      }
    },
  },
  plugins: [],
}

