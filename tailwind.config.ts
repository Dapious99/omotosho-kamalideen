import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      inter: ["Inter", "sans-serif"],
      // agbalumo: ["Agbalumo", "sans-serif"],
      poppins: ["Poppins", "cursive"],
    },
    extend: {
      animation: {
        "fade-up": "fadeUp 0.8s ease-in-out",
        "text-reveal": "textReveal 1s ease-in-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        textReveal: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
