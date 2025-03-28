import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "fire-orange": "#F49D37",
        "deep-maroon": "#140F2D",
        "vivid-pink": "#DC0073",
        "coral-red": "#EE4B6A",
        "hot-pink": "#F44174",
        "neon-pink": "#F40076",
      },
      fontFamily: {
        sarpanch: ["Sarpanch", "sans-serif"], 
      },
    },
  },
  plugins: [],
} satisfies Config

