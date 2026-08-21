import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#1e90ff",
          light: "#60a5fa",
          dark: "#1d6dd4",
          glow: "rgba(30,144,255,0.15)",
        },
        violet: {
          DEFAULT: "#818cf8",
          light: "#a5b4fc",
          dark: "#6366f1",
          glow: "rgba(129,140,248,0.15)",
        },
        purple: {
          DEFAULT: "#a855f7",
          glow: "rgba(168,85,247,0.15)",
        },
        cyan: {
          DEFAULT: "#22d3ee",
          glow: "rgba(34,211,238,0.15)",
        },
        dark: {
          DEFAULT: "#04040c",
          card: "#0a0a18",
          lighter: "#10102a",
          border: "#1c1c38",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        blob: "blob 10s infinite",
        "blink-caret": "blinkCaret 0.75s step-end infinite",
        shimmer: "shimmer 2.5s infinite",
        aurora: "aurora 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-x": "gradientX 6s ease infinite",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(30,144,255,0.2)" },
          "100%": { boxShadow: "0 0 30px rgba(30,144,255,0.5), 0 0 60px rgba(129,140,248,0.2)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        blinkCaret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        aurora: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1) translate(0,0)" },
          "33%": { opacity: "0.7", transform: "scale(1.1) translate(20px,-20px)" },
          "66%": { opacity: "0.5", transform: "scale(0.95) translate(-10px,10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(30,144,255,0.3), 0 0 30px rgba(30,144,255,0.1)" },
          "50%": { boxShadow: "0 0 30px rgba(30,144,255,0.6), 0 0 60px rgba(129,140,248,0.3)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "300%": "300%",
        "400%": "400%",
      },
    },
  },
  plugins: [],
};

export default config;
