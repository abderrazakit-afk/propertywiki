import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6f4',
          100: '#f0ebe6',
          200: '#e0d5cc',
          300: '#cdbaa9',
          400: '#b89a85',
          500: '#a8826b',
          600: '#9b7260',
          700: '#815d51',
          800: '#6a4e45',
          900: '#57413a',
          950: '#2e211e',
        },
        luxury: {
          gold: '#c9a961',
          platinum: '#e5e4e2',
          charcoal: '#36454f',
          cream: '#fffdd0',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#333',
            a: {
              color: '#9b7260',
              '&:hover': {
                color: '#815d51',
              },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
export default config
