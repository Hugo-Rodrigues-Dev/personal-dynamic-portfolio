/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7ff',
          100: '#e4ebff',
          200: '#c7d4ff',
          300: '#9fb1ff',
          400: '#7d8fff',
          500: '#5d6cf6',
          600: '#424be0',
          700: '#3237b3',
          800: '#292f8e',
          900: '#252a72'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
}
