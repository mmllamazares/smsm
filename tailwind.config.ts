import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.js",
  ],
  // make sure to safelist these classes when using purge
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],

  // enable dark mode via class strategy
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
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
        "extra": "#aca4b0",
        "error":"#d9534f",
        "success":"#5cb85c",
      },
      fontFamily:{
        "Roboto-Bold": ['Roboto-Bold'],
        "Roboto-Regular": ['Roboto-Regular'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
