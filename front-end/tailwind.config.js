/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        'blue-quarter': '#D2F0F5',
        'blue-page': '#E8F7FA',
        'blue-principale': '#21B7CF',
        'blue-grad': '#00DCFF' ,
        'pink-hot': '#FC3C70',
        'pink-dark':'#E23664',
        'blue-green': '#4BD2CF',
        'grey-big': '#787575',
        'grey-font': '#828282',
        'gey-line': 'BDBDBD',
        'green-hot': '#3FAB35',
        'red-hot': '#FF0000',
        'blue-side': '#1C99CF',
        'blue-dark':'#2155CD',
      },
    },
     
  },
  plugins: [],
}