import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'yellow': '#FFE81F',
      'black': '#000000',
      'silver' : '#B3B6B7',
      'violet': '#54457F',
      'green': '#4C6663'

    },
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
  }
} satisfies Config
