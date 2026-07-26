/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        'ink-soft': '#475569',
        'ink-faint': '#94A3B8',
        royal: '#2563EB',
        'royal-deep': '#1D4ED8',
        teal: '#14B8A6',
        'teal-soft': '#5EEAD4',
        mist: '#F8FAFC',
        line: '#E2E8F0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)',
        'grad-accent': 'linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)',
        'grad-dark': 'linear-gradient(180deg, #0F172A 0%, #16213E 100%)',
        'grad-radial-royal': 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
        'grad-radial-teal': 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
        card: '0 8px 30px -8px rgba(15, 23, 42, 0.12)',
        glow: '0 0 40px -8px rgba(20, 184, 166, 0.35)',
        'glow-royal': '0 0 40px -8px rgba(37, 99, 235, 0.35)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.9 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
