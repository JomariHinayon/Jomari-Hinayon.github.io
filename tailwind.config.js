/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors:{
      black: '#000000',
      white: '#FFFFFF',
      lightGray: '#777777',
      gray: '#767676',
      darkGray: '#414141',
      veryDarkGray: '#393939',
      paleWhite: '#f5f5f5',
      neutral: '#cacbcc'

    },
    fontFamily:{
      montserrat: ['Montserrat', 'sans-serif']
    },
    screens:{
      'sm': '64px',
      'md': '768px',
      'lg': '1100px',
      'contact': '819px'
    }
  },
  plugins: [
  
  ],
}
