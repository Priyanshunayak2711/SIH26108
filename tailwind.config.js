/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c3d9ec',
          300: '#94bfe0',
          400: '#5e9ed0',
          500: '#3880be',
          600: '#2766a2',
          700: '#205183',
          800: '#003366', // Formal BIS Navy Blue
          900: '#0b2545',
          950: '#06172d',
        },
        tricolor: {
          saffron: '#FF9933',
          white: '#FFFFFF',
          green: '#138808',
          navy: '#000080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
