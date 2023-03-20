/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        NanumGeumunbohwa: ['NanumGeumunbohwa', 'sans-serif'],
      },
      backgroundImage: {
        'main-pattern': "url('/images/pond.png')",
      },
      colors: {
        'menu-hover': 'rgb(255, 130, 92)',
        'frog-color': '#4D7D53',
      },
    },
  },
  plugins: [],
};
