/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebf2ff',
          100: '#d6e7ff',
          200: '#b3daff',
          300: '#85ceff',
          400: '#47bcff',
          500: '#1fadff',
          600: '#059bff',
          700: '#0099ff',
          800: '#0882c4',
          900: '#0d769c',
          950: '#0e4b5d',
        },
        secondary: {
          50: '#fefce8',
          100: '#fffac2',
          200: '#fff187',
          300: '#ffe243',
          400: '#ffcf19',
          500: '#efb403',
          600: '#ce8a00',
          700: '#a46204',
          800: '#884c0b',
          900: '#733e10',
          950: '#432005',
        },

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
      },
    },
  },
  plugins: [],
};
