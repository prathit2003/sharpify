import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        display: ["Electrolize", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
