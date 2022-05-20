module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    maxWidth:{
      '2/5':'20%'
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
 daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#0072a3",
          "primary-focus": "#00587E",
          "success": "#5aa220",
          "success-focus":"#448B0B"
        },
      },
    ],
  },
  }
