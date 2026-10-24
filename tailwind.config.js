/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          hover: 'var(--brand-hover)',
          text: 'var(--brand-text)',
          glow: 'var(--brand-glow)',
        },
        surface: {
          base: 'var(--bg-base)',
          sidebar: 'var(--bg-sidebar)',
          card: 'var(--bg-surface)',
          hover: 'var(--bg-hover)',
          active: 'var(--bg-active)',
          input: 'var(--bg-input)',
          border: 'var(--border)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
