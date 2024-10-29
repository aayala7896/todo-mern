/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-blue': '#5CB1FF',
        'dark-blue': '#2D8CFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
