/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070B",
          900: "#0B0B12",
          850: "#0F0F18",
          800: "#15151F",
          700: "#1D1D2A",
          600: "#2A2A3B",
        },
        signal: {
          cyan: "#00E5FF",
          violet: "#8B5CF6",
          amber: "#FFB020",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "22px 22px",
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,229,255,0.15)",
        "glow-violet": "0 0 40px rgba(139,92,246,0.18)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        blink: "blink 1.4s step-start infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
