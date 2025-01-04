/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'text-radial': 'radial-gradient(64.18% 64.18% 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
      },
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        lightWhite: 'rgba(255, 255, 255, 0.7)',
        lightBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
