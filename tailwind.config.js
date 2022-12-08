/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
        white:{
          DEFAULT: '#FFFFFF',
          light:"#E6F5E5",
          // light:"rgba(255, 255, 255, 0.6)",
        },
        black:{
          DEFAULT: '#3E3E3E',
          dark:"#000000",
          light:"#464646",
          // light:" rgba(20, 38, 100, 0.35)",
        },
        red:{
          DEFAULT: '#FF0000',
          dark:"#911515",
          // light:" rgba(20, 38, 100, 0.35)",
        },
        green:{
          DEFAULT: '#41A53D',
          gradiant:"linear-gradient(270deg, #41A52D 3.88%, #21941F 56.85%) !important",
          liner:"linear-gradient(180deg, #41A53D 0%, #24721D 100%)",
          light:"#E0EFDF",
          dark:"#3E9D2B"
        },
        grey:{
          DEFAULT: '#F3F3F3',
          // light:" rgba(20, 38, 100, 0.35)",
        },
        sky:{
          DEFAULT: '#159189',
          nev:"#15918A",
        },
        pink:{
          DEFAULT: '#5F1471',
          dark:"#10397C",
        },
        brownn:{
          DEFAULT: '#A1641C',
          
        }
        
      },
    },
    screens: {
      // 'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1282px',
      '2xl': '1550px',
      '3xl': '2550px',
      
    },
    fontSize: {
      'xstwo': '7px',
      'xsone': '9px',
      'xs': '10px',
      'smtwo': '12px',
      'sm': '15px',
      'tiny': '18px',
      'base': '20px',
      'lg':   '22px',
      'xl': '25px',
      '2xl': '30px',
      '3xl': '35px',
      '4xl': '40px',
      '5xl': '45px',
      '6xl': '50px',
      '7xl': '64px',
      '8xl': '65px',
      '9xl': '60px',
      '10xl': '100px',
    },
  },
  plugins: [],
}
