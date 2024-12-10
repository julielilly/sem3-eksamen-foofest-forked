/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--foreground)",
        white: "var(--white)",
        darkblue: "var(--blue-dark)",
        lightblue: "var(--blue-light)",
        green: "var(--green)",
        yellow: "var(--yellow)",
        red: "var(--red)",
      },
      fontSize: {
        normal: "var(--text)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        title: "var(--title)",
        "big-title": "var(--big-title)",
      },
      fontFamily: {
        "germania-one": ["var(--font-germania-one)", "monospace"],
        "caesar-dressing": ["var(--font-caesar-dressing)", "monospace"],
        "hind-madurai": ["var(--font-hind-madurai)", "monospace"],
      },
      spacing: {
        "3xs": "var(--space-3xs)",
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        s: "var(--space-s)",
        m: "var(--space-m)",
        l: "var(--space-l)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
      },
    },
  },
  plugins: [],
};
