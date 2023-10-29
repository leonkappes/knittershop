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
        primary: "#212831",
        background: "#F1E1CD",
        accent: "#66896C",
        accent2: "#6A3A18",
        success: "#487800"
      },
    },
  },
  plugins: [],
}
export default config
