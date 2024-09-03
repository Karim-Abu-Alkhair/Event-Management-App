/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2162AF",
        secondary: "#39485B",
        "font-60": "#898A8D",
        "error-bg": "#FFECE8",
        error: "#F63207",
        success: "#01c237",
        "layout-bg": "#f6f8f9",
      },
    },
  },
  plugins: [],
};
