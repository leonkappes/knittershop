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
        primary: "#30261c",
        background: "#F1E1CD",
        accent: "#b08f6c",
        accent2: "#6A3A18",
        success: "#487800"
      },
    },
  },
  plugins: [],
}
export default config
