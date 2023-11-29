/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ], 
  darkMode:'class',
  theme: {
    fontFamily: {
      'display': ['"Montserrat"'],
    },
    extend: {
      colors:{
        'light-cyan':'#00BBE1'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'Login-image': "url('./assets/images/BackGround.jpeg')",
      },

      animation: {
        fullBorder: 'backGround 6s ease infinite',
        progressBar: 'progressBar 6s linear infinite',
        coming:'in_left 1s ease-in-out ',
        out:'in_left 1s ease-in-out reverse '
      },
      keyframes: {
        backGround: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        progressBar: {

          '0%': {
            width: '0%'
          },
          '100%': {
            width: '100%'
          }
        },
        in_left: {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: '.5',
            transform: 'translateX(0)',
          },
         },
         
         out_left:{
          from: {
            opacity: '.5',
            transform: 'translateX(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
         }
      },
    },
  },
  plugins: [],
}