import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: {
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222',
        },
        gold: {
          600: '#A07830',
          500: '#C9A84C',
          400: '#E2C97E',
          100: '#F5ECD7',
        },
        gray: {
          300: '#D1D5DB',
          500: '#6B7280',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#D1D5DB',
            '--tw-prose-headings': '#E2C97E',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-links': '#C9A84C',
            '--tw-prose-quotes': '#F5ECD7',
            '--tw-prose-bullets': '#A07830',
            '--tw-prose-counters': '#A07830',
            '--tw-prose-hr': '#222222',
            '--tw-prose-th-borders': '#222222',
            '--tw-prose-td-borders': '#1A1A1A',
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
