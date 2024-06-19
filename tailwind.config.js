/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e86e1e',
        background: '#f0f0f0', // Define your background color
      },
      screens: {
        'sm': '320px',
        'md': '768px',
      },
    },
  },
  plugins: [],
}
