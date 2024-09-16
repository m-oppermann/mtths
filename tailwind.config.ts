import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      sans: ["var(--font-mori)", "sans-serif"],
      serif: ["var(--font-editorial-new)", "serif"],
    },
    fontSize: {
      sm: ["0.875rem", "150%"],
      base: ["1rem", "140%"],
      lg: ["1.25rem", "130%"],
      xl: ["1.5rem", "130%"],
    },
    colors: {
      gray: {
        1: "hsl(0, 0%, 99%)",
        2: "hsl(0, 0%, 91%)",
        3: "hsl(0, 0%, 88%)",
        4: "hsl(0, 0%, 85%)",
        5: "hsl(0, 0%, 39%)",
        6: "hsl(0, 0%, 13%)",
      },
      grayDark: {
        1: "hsl(0, 0%, 7%)",
        2: "hsl(0, 0%, 16%)",
        3: "hsl(0, 0%, 19%)",
        4: "hsl(0, 0%, 23%)",
        5: "hsl(0, 0%, 71%)",
        6: "hsl(0, 0%, 93%)",
      },
    },
    extend: {
      screens: {
        "-sm": { max: "639px" },
        "-md": { max: "767px" },
        "-lg": { max: "1023px" },
        "-xl": { max: "1279px" },
        "-2xl": { max: "1535px" },
        "-*": { max: "1621px" },
      },
    },
  },
  plugins: [],
}

export default config
