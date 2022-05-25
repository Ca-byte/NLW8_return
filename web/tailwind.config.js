module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          500: '#8257e6',
          300:'#996DFF',
          600: '#8257E5',
        }
      },
      borderRadius:{
        md: '4px'
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
