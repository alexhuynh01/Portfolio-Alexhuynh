/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      // screens: {
      //   'xs': "480px",
      // },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Josefin: ["Josefin Sans", 'sans-serif']
      },
      colors: {
        "fresh-color": "",
      },
      keyframes: {
        sideDown: { "0%": { transform: "transLateY(-100%)" }, "100%": { transform: "transLateY(0)" }, },
        sideLeft: { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" }, },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: {
          '0%': { transform: 'translate3d(0px,8px,0px)', opacity: 0 },
          '100%': { transform: 'translate3d(0px,0px,0px)', opacity: 1 },
        }
      },
      animation: {
        sideDown: "sideDown .5s ease-in-out",
        sideLeft: "sideLeft .5s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
        slideUp: 'slideUp .4s ease-in',
      },
    },
  },
  plugins: [],
};
