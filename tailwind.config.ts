import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
      clash: ["Clash Display", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        brutal: {
          yellow: "#FFE500",
          pink: "#FF006E",
          blue: "#00F0FF",
          black: "#000000",
          white: "#FFFFFF",
          gray: "#F5F5F5",
        },
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #000000",
        "brutal-lg": "8px 8px 0px 0px #000000",
        "brutal-yellow": "6px 6px 0px 0px #FFE500",
        "brutal-pink": "6px 6px 0px 0px #FF006E",
        "brutal-blue": "6px 6px 0px 0px #00F0FF",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "slide-up-bounce": "slideUpBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        wiggle: "wiggle 0.5s ease-in-out",
        "text-glitch": "textGlitch 0.5s ease-in-out",
        "border-dance": "borderDance 1s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUpBounce: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(60px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        textGlitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        borderDance: {
          "0%, 100%": { 
            borderColor: "#FFE500" 
          },
          "33%": { 
            borderColor: "#FF006E" 
          },
          "66%": { 
            borderColor: "#00F0FF" 
          },
        },
      },
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
