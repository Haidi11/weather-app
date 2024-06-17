/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e86e1e',
      },
      height: {
        '480': '30rem',
      },
      width: {
        '460': '460px',
      },
      spacing: {
        '16px': '16px',
      },
      screens: {
        'sm': '320px',
        'md': '768px',
      },
    },

  },
  plugins: [],
}