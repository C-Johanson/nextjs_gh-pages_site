/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      animation: {
        typing: 'typing 4s steps(22, end), blink .5s step-end infinite'
      },
      keyframes: {
        blink: {
          from: { borderColor: 'transparent' },
          to: { borderColor: '[#5651e5]'}
        },
        typing: {
          from: {
            width: 0
          },
          to: {
            width: '100%'
          }
        }
      }

    },
  },
  plugins: [require('tailwind-scrollbar')],
}
