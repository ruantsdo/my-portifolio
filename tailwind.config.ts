import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#111827",
        bgContrast: "#1F2937",
        gray: "#444655",
        white: "#D9D9D9",
        blue: "#4191F9",
        blueSecondary: "#2E95B4",
        red: "#EE4266",
        purple: "#8957E5",
        green: "#04E824",
        black: "#000000",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        float: "float 3s linear infinite 1s",
        "slide-in-left":
          "slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(-5px)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "75%": {
            transform: "translateY(5px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-30px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
