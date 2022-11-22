/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'phone-instagram': "url('https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png')",
      },
      backgroundColor: {
        'login-instagram': 'rgb(255, 255, 255)'
      },
      height: {
        'height-login': '400px',
        'height-login-register': '640px',
      },
      width: {
        'width-login': '350px',
        'width-image': '460px'
      },
      fontFamily: {
        'fonte-instagram': 'Dancing Script, cursive'
      }
    },
  },
  plugins: [],
}