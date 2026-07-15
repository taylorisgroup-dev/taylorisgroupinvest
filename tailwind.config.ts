import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A192F",
          light: "#112240",
          dark: "#020c1b",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F4CF57",
          dark: "#B48F17",
        },
        slate: {
          light: "#F8FAFC",
          DEFAULT: "#64748B",
          dark: "#1E293B",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "count-up": "countUp 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;