/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Roboto, sans-serif",
      },
      colors: {
        primary: "#3179ba",
      },
      screens: {
        md: "500px",
      },
    },
  },
  plugins: [],
};
