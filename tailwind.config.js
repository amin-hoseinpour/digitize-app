/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        'vazir':'vazir',
      },
      aspectRatio:{
        '4/3':'4/3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

