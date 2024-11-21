/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Helvetica', 'sans-serif'],
      },
      screens: {
        xsm: '320px',
        sm: '425px',
      },
    },
  },
  plugins: [scrollbar],
};
