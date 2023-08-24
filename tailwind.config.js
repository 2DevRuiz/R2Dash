/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ], theme: {
    fontFamily: {
      'display': ['"Montserrat"'],
    },
    extend: {
      backgroundImage: {
        'Login-image': "url('./assets/images/BackGround.jpeg')",
      },
      animation: {
        fullBorder: 'backGround 6s ease infinite',
        progressBar: 'progressBar 6s linear infinite'
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
        }

      },
    },
  },
  plugins: [],
}