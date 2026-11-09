/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#07152C',
          surface: '#0E2341',
          light: '#152d4a',
        },
        blue: {
          primary: '#2563EB',
          light: '#60A5FA',
        },
        teal: {
          accent: '#14B8A6',
        },
        slate: {
          bg: '#F8FAFC',
          text: '#0F172A',
          muted: '#64748B',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
