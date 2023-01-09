/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#424242",
        gray: "#494949",
        green: {
          100: "#D2F6C5",
          200: "#0FBF61",
        },
        purple: "#AAC4FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
