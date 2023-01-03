/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "assets/**/*.{css}",
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "cursive"],
        lora: ["Lora", "cursive"],
      },
    },
  },
  plugins: [],
}
