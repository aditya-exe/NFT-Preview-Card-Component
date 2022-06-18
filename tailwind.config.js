/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
      colors: {
        mainbg: 'hsl(217, 54%, 11%)',
        cardbg: 'hsl(216, 50%, 16%)',
        cyanoverlay: 'hsl(178, 100%, 50%)',
        softblue: 'hsl(215, 51%, 70%)',
        border: 'hsl(215, 32%, 27%)',
      }
    },
  },
  plugins: [],
}
