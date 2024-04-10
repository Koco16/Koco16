/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
        "iphone-se": "320px", // iPhone SE
        "iphone-xr": "414px", // iPhone XR, XS Max, 11, 11 Pro Max
      },
    },
  },
  plugins: [],
};
