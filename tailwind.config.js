/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ff2d8d',
          violet: '#7c3aed'
        }
      },
      backgroundImage: {
        'ang-gradient': 'linear-gradient(135deg, #ff2d8d 0%, #a855f7 60%, #7c3aed 100%)'
      }
    },
  },
  plugins: [],
}
