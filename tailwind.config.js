/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50', // Deep Slate
        secondary: '#95A5A6', // Soft Grey
        accent: '#D4AC0D', // Muted Gold
        sand: '#F5F5F1', // Warm White
        stone: '#Eae7e0', // Light Beige
        sage: '#8F9779', // Muted Green
        earth: '#5D5C61', // Dark Grey
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
