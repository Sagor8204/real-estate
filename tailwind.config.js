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
        text: {
          primary: "#2F2B3D",
        },
        primary: {
          DEFAULT: "#1C2F96", // Original color
          50: "#F2F2FB", // Lightest variant
          100: "#E1E4FA",
          200: "#BFC3F4",
          300: "#9EA3EF",
          400: "#7C82E9",
          500: "#1C2F96", // Main color
          600: "#1A2A87",
          700: "#162373",
          800: "#121B5F",
          900: "#0F154F", // Darkest variant
        },
      },
      boxShadow: {
        "custom-blue":
          "0px 0px 43px 0px rgba(7.0000000000000036, 152.0000000000005, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
