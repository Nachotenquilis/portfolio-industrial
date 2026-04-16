/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We will use 'class' for day/night toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        industrial: {
          900: '#111315', // Carbon black
          800: '#1c1f22', // Dark metallic
          700: '#2d3238',
          600: '#4a5056', // Grey metallic
          500: '#7a8189',
          400: '#adb3b9', // Light metallic
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6', 
          50:  '#f9fafb',
        },
        safety: {
          orange: '#FF5722', // Safety orange
          yellow: '#FFC107',
          blue: '#00E5FF',   // Electric blue
          neon: '#39FF14',   // Neon green
        }
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h40v40H0V0zm39 39V1H1v38h38z\" fill=\"%23333333\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
