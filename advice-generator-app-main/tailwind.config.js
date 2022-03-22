module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)'
      },
      boxShadow: {
        'btn-dice': '0px 0 15px 5px rgb(0 0 0 / 0.1)'
      },
      fontFamily: {
        'sans': 'Manrope, sans-serif',
      },
      fontSize: {
        'advice': '28px'
      }
    },
  },
  plugins: [],
}
