/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        NanumGeumunbohwa: ['NanumGeumunbohwa', 'sans-serif'],
      },
      fontSize: {
        xxs: ['12px', '16px'],
        xs: ['14px', '20px'],
        sm: ['16px', '22px'],
        md: ['24px', '32px'],
        '2md': ['28px', '40px'],
        lg: ['32px', '38px'],
        xl: ['48px', '68px'],
        '2xl': ['64px', '77px'],
        '3xl': ['86px', '103px'],
      },
      screens: {
        xs: '320px',
      },
      backgroundImage: {
        'main-pattern': "url('/images/pond.png')",
      },
      colors: {
        'menu-hover': 'rgb(255, 130, 92)',
        frog: '#4D7D53',
        'frog-light': '#96C76A',
        online: '#ADFF8D',
      },
    },
  },
  plugins: [],
};
