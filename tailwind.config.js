/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}',
    './stories/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      'var(--color-bg-default)',
        text:    'var(--color-text-primary)',
        accent:  'var(--color-accent-default)',
        'accent-hover':   'var(--color-accent-hover)',
        'accent-pressed': 'var(--color-accent-pressed)',
        surface: 'var(--color-surface-default)',
        border:  'var(--color-border-default)',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        button: 'var(--radius-button)',
        card:   'var(--radius-card)',
        tag:    'var(--radius-tag)',
        input:  'var(--radius-input)',
      },
      spacing: {
        'inline-xs': 'var(--spacing-inline-xs)',
        'inline-sm': 'var(--spacing-inline-sm)',
        'inline-md': 'var(--spacing-inline-md)',
        'inline-lg': 'var(--spacing-inline-lg)',
        'stack-xs':  'var(--spacing-stack-xs)',
        'stack-sm':  'var(--spacing-stack-sm)',
        'stack-md':  'var(--spacing-stack-md)',
        'stack-lg':  'var(--spacing-stack-lg)',
        'stack-xl':  'var(--spacing-stack-xl)',
      },
      boxShadow: {
        'card-hover': 'var(--elevation-card-hover)',
        'focus':      'var(--elevation-focus)',
      },
    },
  },
  plugins: [],
};
