/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-rtl"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require("flowbite/plugin"),
    require("daisyui"),
  ],
};
