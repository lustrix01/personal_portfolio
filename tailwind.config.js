/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        lightBgLeft: '#E0F7FA', 
        lightBgBottom: '#F1E0FC', 
        darkBgLeft: '#101D38', 
        darkBgBottom: '#1C2A4F', 
        accentLight: '#2D325A', 
        accentDark: '#E0F7FA', 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}