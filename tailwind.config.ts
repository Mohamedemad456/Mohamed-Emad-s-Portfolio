import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#2FBF9E',
          dark: '#1F8F7A',
          light: '#DFF5EF',
        },
        purple: {
          DEFAULT: '#7C6AE6',
          dark: '#5A4BCF',
          light: '#EEEAFE',
        },
        bg: '#FFFFFF',
        card: '#F5F7FA',
        text: '#111827',
        textSecondary: '#6B7280',
        border: '#E5E7EB',
      },
      backgroundImage: {
        'gradient-green-purple': 'linear-gradient(135deg, #2FBF9E, #7C6AE6)',
        'gradient-soft': 'linear-gradient(135deg, #DFF5EF, #EEEAFE)',
        'gradient-dark': 'linear-gradient(135deg, #1F8F7A, #5A4BCF)',
      },
    },
  },
  plugins: [],
};

export default config;
