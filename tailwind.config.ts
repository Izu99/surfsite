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
        primary: "#3b82f6", // Blue 500
        secondary: "#2563eb", // Blue 600
        accent: "#60a5fa", // Blue 400
        dark: "#1e3a8a", // Blue 900
        darker: "#172554", // Blue 950
        deep: "#0f172a", // Slate 950 (very dark blue tint)
        light: "#eff6ff", // Blue 50
        sky: "#0ea5e9", // Sky 500
        gray: "#64748b", // Slate 500
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        opensans: ["var(--font-opensans)", "sans-serif"],
      },
      keyframes: {
        heroIn: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        waveFlow: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25px)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        heroIn: "heroIn 1s ease 0.3s both",
        fadeUp: "fadeUp 0.8s ease both",
        waveFlow: "waveFlow 8s ease-in-out infinite",
        slowZoom: "slowZoom 10s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
