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
      neutral: '#cacbcc',
      white2: '#F7F7F7',
      white3: '#E7E6E2',
      white4: '#DADADA',
      white5: '#CCCCCC'

    },
    fontFamily:{
      montserrat: ['Montserrat', 'sans-serif']
    },
    screens:{
      'sm': '64px',
      'md': '768px',
      'lg': '1100px',
      'contact': '819px',
      'navbar' : '1122px',
      'nav': '1250px'
    }
  },
  darkMode: 'class',
  plugins: [
  
  ],
}
