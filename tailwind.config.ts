import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        deep: "var(--deep)",
        aqua: "var(--aqua)",
        tint: "var(--tint)",
        mist: "var(--mist)",
        peach: "var(--peach)",
        border: "var(--border)",
        rainbow: {
          red: "var(--r1)",
          orange: "var(--r2)",
          yellow: "var(--r3)",
          green: "var(--r4)",
          aqua: "var(--r5)",
          blue: "var(--r6)",
          violet: "var(--r7)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
        handwritten: ["var(--font-handwritten)"],
      },
      fontSize: {
        small: "var(--text-small)",
        body: "var(--text-body)",
        lead: "var(--text-lead)",
        h1: "var(--text-h1)",
        h2: "var(--text-h2)",
        h3: "var(--text-h3)",
      },
      maxWidth: {
        site: "var(--content-width)",
      },
      spacing: {
        gutter: "var(--page-gutter)",
        section: "var(--section-space)",
      },
      borderRadius: {
        control: "var(--radius-control)",
      },
    },
  },
  plugins: [],
}
export default config
