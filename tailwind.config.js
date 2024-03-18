/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("postcss-nested"),
    require("tailwindcss"),
    require("autoprefixer"),
    // Other PostCSS plugins if needed
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "870px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primarybg: "#0F0529",
        secondarybg: "#785468",
        primarytxt: "#F0DBFF",
        secondarytxt: "#F5F4F3",
        textinfo: "#B8AABB",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontFamily: {
        primary: ["Poppins"],
        second: ["Oxygen"],
      },
    },
  },
  variants: {},
  plugins: [],
};
