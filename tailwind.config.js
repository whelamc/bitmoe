/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./client/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  purge: {
    enabled: true,
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./client/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  theme: {
    screens: {
      sm: [{ min: "320px", max: "767px" }],
      md: [{ min: "768px", max: "992px" }],
    },
    extend: {
      colors: {
        endeavour: {
          50: "#f0f7ff",
          100: "#dfeeff",
          200: "#b9defe",
          300: "#7bc5fe",
          400: "#34a7fc",
          500: "#0a8ded",
          600: "#006dcb",
          700: "#005bac",
          800: "#054b87",
          900: "#0a3e70",
          950: "#07274a",
          DEFAULT: "#34a7fc",
        },
      },
    },
  },
  plugins: [],
};
