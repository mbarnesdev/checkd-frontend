/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#151f2b',
        accent: '#202c3c',
        home: '#faca1d',
        away: '#42db5d',
      },
      backgroundImage: {
        emirates: "url('/emirates.webp')",
      },
    },
  },
  plugins: [],
};
