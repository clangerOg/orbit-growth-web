/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {
      fontFamily: {
        sans: [
          // 'Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
          'Inter var',
          ...defaultTheme.fontFamily.sans,
          {
            fontFeatureSettings: '"cv02","cv03","cv04","cv11"',
          },
        ],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        neutral: colors.blue,
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
