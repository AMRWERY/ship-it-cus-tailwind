/** @type {import('tailwindcss').Config} */

const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './tailwind-theme.js',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require("flowbite/plugin"),
    FormKitVariants,
  ],
};
