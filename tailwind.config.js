module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'primary': '#00B388',
      'secondary': '#009a75',
      'tertiary': '#1F2937',
      'primary-light': '#1F2937',
      'lightgreen': '#B4E1D6',
      'lightgreenhover': '#91C2B7',
    },
    
  },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}