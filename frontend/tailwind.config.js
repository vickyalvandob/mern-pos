/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

