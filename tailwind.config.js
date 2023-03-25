/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        NanumGeumunbohwa: ['NanumGeumunbohwa', 'sans-serif'],
        UhBeeGmin2: ['UhBeeGmin2', 'sans-serif'],
        UhBeeGmin2Bold: ['UhBeeGmin2Bold', 'sans-serif'],
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
        'twitch-purple': '#6441A5',
        shadow: 'rgba(42, 0, 122, 0.4)',
        'button-border': 'rgb(237, 243, 245)',
        'youtube-red': '#FF0000',
        'youtube-black': '#282828',
        'discord-blue': '#7289DA',
        'title-black': '#404041',
      },
      boxShadow: {
        normal: '0 16px 30px rgb(23 31 114 / 20%)',
      },
    },
  },
  plugins: [],
};
