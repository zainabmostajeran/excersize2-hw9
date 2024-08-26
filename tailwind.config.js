/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        circular:["Circular","Sanserif","Arial"]
      },
      colors:{
        "app-pink":"#f85e9f",
        "app-gray":"#191825",
        "app-purple":"#5d50c6",
        "app-orange":"#ff5722",
      },
      fontSize:{
        "heading1":"69px"
      }
    },
  },
  plugins: [],
}

