/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oman-sand': '#E6DCC8', // Soft limestone/sand
        'oman-rock': '#8C7C6D', // Muted brown rock
        'oman-sea': '#1A3C40',  // Deep teal/blue
        'oman-sky': '#F4F1EA',  // Off-white paper
        'oman-dark': '#1C1917', // Warm black
        'oman-muted': '#A8A29E', // Stone grey
      },
      fontFamily: {
        serif: ['"Lora"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
