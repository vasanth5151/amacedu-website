/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Parkinsans', 'Arial', 'sans-serif'],
        display: ['Parkinsans', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#F97D81',
          greenDark: '#e8666a',
          greenLight: '#ff9a9d',
          leaf: '#ffeaeb',
        },
        ink: {
          DEFAULT: '#4b5563', // gray-600
          soft: '#6b7280', // gray-500
          muted: '#9ca3af', // gray-400
        },
        cream: {
          DEFAULT: '#e0f2fe', // sky-100 (light blue)
          deep: '#bae6fd', // sky-200
        },
        sand: '#F6EAC9',
        sandDeep: '#EFDCA9',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(24,22,19,0.25)',
        card: '0 10px 40px -20px rgba(24,22,19,0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
