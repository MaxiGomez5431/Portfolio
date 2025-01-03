/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
        '50': '#eef9ff',
        '100': '#d8f1ff',
        '200': '#bae7ff',
        '300': '#8adaff',
        '400': '#53c4ff',
        '500': '#2ba5ff',
        '600': '#1789fc',
        '700': '#0d6ee8',
        '800': '#1258bb',
        '900': '#154d93',
        '950': '#122f59',
        },
        'dark-mode': '#121212'
      },
      boxShadow: {
        'about-me': '-4px 0px 0px #1258bb', 
      },
    },
  },
  plugins: [],
}

