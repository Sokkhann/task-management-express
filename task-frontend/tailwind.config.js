/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        mustard: "#D2A94C",
        chocolate: "#5D3A1A",
        darkgreen: "#154734",
      },
    },
  },
  darkMode: "class", // or "media" depending on your preference
  plugins: [heroui()],
};
