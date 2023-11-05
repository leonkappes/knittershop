import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0,0,0,0.7)",
        background: "#f1e1cd",
        accent: "#598c62",
        accent2: "#f8ebdb",
        success: "#487800"
      },
    },
  },
  plugins: [],
}
export default config
