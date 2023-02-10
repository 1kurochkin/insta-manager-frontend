/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: 'white',
        secondary: 'rgb(42 230 16)',
        background: 'rgb(9 7 58)'
      }
    },
    screens: {
      sm: {'max':'650px'},
      md: {'max':'875px'},
      lg: {'max':'1024px'},
      xl: {'max':'1280px'},
      "2xl": {'max':'1536px'}
    }
  },
  plugins: [],
}
