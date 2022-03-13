module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'primary': '#00B188',
      'secondary': '#009a75',
      'tertiary': '#1F2937',
      'primary-light': '#1F2937',
      'lightgreen': '#B4E1D6',
      'lightgreenhover': '#91C2B7',
      'btncolor' : '#00B188',
      'btnhover' : '#009a75',
    },
    
  },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}