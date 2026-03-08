import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1B3C53',
          main: '#234C6A',
          light: '#456882',
        },
        accent: '#D2C1B6',
      },
      fontFamily: {
        serif: ['Outfit', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
