/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5F0",
        forest: "#1A2E22",
        gold: "#C9A84C",
        ink: "#151515",
        "forest-soft": "#2A4334",
        "gold-soft": "#D8BE73",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dmsans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        editorial: "76rem",
      },
      boxShadow: {
        luxe: "0 30px 80px -40px rgba(26, 46, 34, 0.35)",
        "luxe-sm": "0 18px 50px -30px rgba(26, 46, 34, 0.30)",
        gold: "0 0 0 1px rgba(201, 168, 76, 0.35), 0 24px 60px -30px rgba(201, 168, 76, 0.40)",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "subtle-float": "subtle-float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
