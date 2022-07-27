/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        100: '1920px',
      },
      height: {
        90: '1080px',
      },
      colors: {
        darkred: '#662323',
        principalred: '#E86060',
        softgray: '#BDBDBD',
        gray:'#828282',
        graydark: '#555555',
        rose: '#EB5757',
        lightred: '#FF7676'
      },
      fontSize: {
        '22px': '1.375rem'
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
