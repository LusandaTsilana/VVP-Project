/** @type {import('tailwindcss').Config} */
export default {

  mode: 'jit', 

  content: [
    "@/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'rgba(202, 220, 199, 1)',
        
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
}

