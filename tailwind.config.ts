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
          50: '#faf8f7',
          100: '#f3efec',
          200: '#e5ddd6',
          300: '#d4c5b9',
          400: '#bfa68f',
          500: '#a8826b',
          600: '#9b7260',
          700: '#815d51',
          800: '#6a4e45',
          900: '#57413a',
          950: '#2e211e',
        },
        accent: {
          50: '#f4f7f6',
          100: '#e0e9e6',
          200: '#c1d3ce',
          300: '#9bb6ae',
          400: '#749589',
          500: '#5a7a6f',
          600: '#476259',
          700: '#3b504a',
          800: '#32423d',
          900: '#2c3834',
          950: '#161f1c',
        },
        warm: {
          50: '#fafaf9',
          100: '#f5f4f2',
          200: '#e8e6e3',
          300: '#d6d3ce',
          400: '#b8b3ab',
          500: '#9f9890',
          600: '#8a837a',
          700: '#726c65',
          800: '#605b55',
          900: '#514d48',
          950: '#2a2825',
        },
        luxury: {
          gold: '#c9a961',
          platinum: '#e5e4e2',
          charcoal: '#36454f',
          cream: '#fffdf8',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            color: '#3d3d3d',
            a: {
              color: '#5a7a6f',
              textDecoration: 'underline',
              textDecorationColor: '#c1d3ce',
              '&:hover': {
                color: '#476259',
                textDecorationColor: '#9bb6ae',
              },
            },
            h1: {
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: '#1a1a1a',
            },
            h2: {
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              color: '#1a1a1a',
            },
            h3: {
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontWeight: '600',
              color: '#2d2d2d',
            },
            strong: {
              color: '#1a1a1a',
            },
            blockquote: {
              borderLeftColor: '#9bb6ae',
              color: '#5a5a5a',
              fontStyle: 'italic',
            },
          },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'featured': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [typography],
}
export default config
