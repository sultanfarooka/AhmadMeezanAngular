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
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
