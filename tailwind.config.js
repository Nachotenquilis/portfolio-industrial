/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        enagas: {
          navy: '#002B49',   // Very dark blue (Corporate background dark mode)
          primary: '#003756',// Dark corporate
          blue: '#0069B4',   // Standard blue
          cyan: '#00A9E0',   // Highlight / Accent
          gray: '#F5F7FA',   // Light background
          slate: '#E2E8F0',  // Borders
        }
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h40v40H0V0zm39 39V1H1v38h38z\" fill=\"%230069B4\" fill-opacity=\"0.03\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
        'grid-pattern-dark': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h40v40H0V0zm39 39V1H1v38h38z\" fill=\"%2300A9E0\" fill-opacity=\"0.03\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
