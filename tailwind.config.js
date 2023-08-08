/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        "background1 ": "rgb(4,115,171)",
        "background2": "linear-gradient(0deg, rgba(4,115,171,0.9808298319327731) 0%, rgba(0,51,153,1) 100%)",
      },
    },
  },
  darkMode: ['class',],
  
  plugins: [],
}

