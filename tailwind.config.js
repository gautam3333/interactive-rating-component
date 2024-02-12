/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      orange: '#fb7413',
      white: '#ffffff',
      'light-grey': '#959eac',
      'medium-grey': '#7c8798',
      'dark-blue': '#252d37',
      'very-dark-blue': '#121417',
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
