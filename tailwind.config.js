/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#F8F8FF",
        bg2: "#FAEBD7",
      }
    },
  },
  plugins: [],
}