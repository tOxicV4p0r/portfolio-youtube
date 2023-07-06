/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#127369",
        primaryContent: "#4C5958",
        primarySubcontent: "#b5cecb",
        primaryBase: "#fdfdfd",
        primaryAccent: "#10403B",
        primaryBg: "#f6f6f6",
      }
    },
  },
  plugins: [],
}

