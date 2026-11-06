/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF9F4',
          100: '#F5F0E6',
          200: '#EDE6D6',
          300: '#E0D6C0',
        },
        ink: {
          50: '#F4F3F1',
          100: '#E4E2DE',
          300: '#A9A6A0',
          500: '#5E5B55',
          700: '#34322E',
          800: '#262523',
          900: '#1B1A18',
        },
        champagne: {
          100: '#F3EBDB',
          200: '#E6D5B0',
          300: '#D4B98A',
          400: '#C0A06A',
          500: '#B08D55',
          600: '#8F7140',
          700: '#735B33',
        },
        sand: {
          100: '#EFE8DA',
          200: '#E4DBC8',
          300: '#CFC3AA',
        },
        sage: {
          100: '#E7EBE3',
          300: '#A9B8A0',
          600: '#4F6244',
          700: '#3E4E35',
        },
        success: {
          100: '#E6F2E8',
          600: '#2F6B41',
          700: '#245432',
        },
        warning: {
          100: '#FBF0DC',
          600: '#9A6412',
          700: '#7A4E0E',
        },
        error: {
          100: '#F8E5E2',
          600: '#A23B2E',
          700: '#82301F',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        header: '0 1px 0 0 rgba(27, 26, 24, 0.08), 0 8px 24px -16px rgba(27, 26, 24, 0.25)',
      },
    },
  },
  plugins: [],
};
