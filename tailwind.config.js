/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        neutral: colors.slate,
        brand: {
          ...colors.blue,
          DEFAULT: '#3b82f6',
        },
        white: colors.white,
      },
    },
  },
  plugins: [],
};
