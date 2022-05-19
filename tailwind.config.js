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
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#0072a3",
          "primary-focus": "#005C84",
         
          "sucess": "#5aa220"
        },
      },
    ],
  },
}


