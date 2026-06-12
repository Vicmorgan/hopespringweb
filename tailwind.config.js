/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,njk,js}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#eebd2b",
        "background-light": "#f8f7f6",
        "background-dark": "#221d10",
        "secondary": "#a8d5ba",
        "accent-blue": "#add8e6",
        "caring": "#ef4444",
        "fairness": "#f97316",
        "trustworthiness": "#3b82f6",
        "responsibility": "#22c55e",
        "respect": "#eab308",
        "citizenship": "#a855f7",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
      borderRadius: { 
        "DEFAULT": "0.5rem", 
        "lg": "1rem", 
        "xl": "1.5rem", 
        "full": "9999px" 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
