import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-blue": "#11467c",
        "primary-light-blue": "#8da0cd",
        "primary-yellow": "#f4d968",
        "secondary-blue": "#4476ae",
        "secondary-light-blue": "#95b0c2",
        "secondary-extra-blue": "#538bac",
        "negro": "#2a3538",
        "gris":"#798b9d",
        "blanco": "#f3f5f1",
        "extra": "#aca4b0"
      }
    },
  },
  plugins: [],
};
export default config;
