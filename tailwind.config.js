/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend:{
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
        white5: '#CCCCCC',
        blue: '#0000FF',
        green: '#00FF00',
        yellow: '#FFFF00',
        orange: '#FFA500',
        darkOrange: '#f3a222',
        darkerOrange: '#d68300',
        darkerOrange2: '#a56b52'
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
        'nav': '1250px',
        'smLogo': '500px',
        'win610': '610px'
      },
      animation:{
        'bounce1': 'bounce 1s infinite',
        'bounce2': 'bounce 1.1s infinite',
        'bounce3': 'bounce 1.2s infinite',
        'bounce4': 'bounce 1.3s infinite'
      },
      backgroundImage: {
        
      }
    }
  },
  darkMode: 'class',
  plugins: [
  
  ],
}
