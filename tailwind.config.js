/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    backgroundColor: {
      'background-color': '#322653',
      'custom-purple': '#8062D6',
      'custom-lila': '#9288F8',
      'custom-pink': '#FFD2D7',
      'custom-white': '#EEEEEE',
    },
      textColor: {
        'custom-purple': '#8062D6',
        'custom-lila': '#9288F8',
        'custom-pink': '#FFD2D7',
        'custom-white': '#EEEEEE',
      },
      borderColor: {
        'custom-purple': '#8062D6',
      },
    },
  },
  plugins: [],
}
