/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['SF Mono', 'ui-monospace', 'monospace'],
    },
    extend: {
      colors: {
        'greene': '#00F252',
        'grey': {
          600: '#4A5469',
          800: '#212837',
          900: '#191C23',
          1000: '#121316'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
