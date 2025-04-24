
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: '#333333', // Border color
        background: {
          DEFAULT: '#000000', // Pure black
          foreground: '#FFFFFF' // White text
        },
        foreground: '#F1F0FB', // Adding explicit foreground color
        text: {
          primary: '#F1F0FB', // Soft, slightly bluish white
          secondary: '#C8C8C9' // Silver gray for secondary text
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
