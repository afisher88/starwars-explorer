import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
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
    borderColor: {
      default: '#B3B6B7'
    },
    borderWidth: {
      default: '1px',
      '1': '1px'
    }
  }
} satisfies Config
