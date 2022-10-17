/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        subtitle: {
          DEFAULT: '#555',
          glow: '#999'
        },
        glow: {
          DEFAULT: '#fff'
        }
      }
    },
  },
  plugins: [],
}
