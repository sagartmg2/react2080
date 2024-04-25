const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7E33E0",
        "primary-dark": "#0D0E43",
        "primary-light": "#E7E6EF",
        secondary: "#FB2E86",
        "secondary-dark": "#b0205e",
        "secondary-light": "#fc6daa",
        "gray-light":"#9096B2"
      },
      screens: {
        /* we should start with mobile. */
        sm: "576px", // mobile landscape mode
        md: "768px", // tablet
        lg: "1024px", // latptop without side numerical in keypad
        xl: "1280px", // normal desktop 188
        xxl: "1400px", // huge monitor  210
      },
      backgroundImage: {
        'banner-1': "url('/assets/banner-1.png')",
        'banner-2': "url('/assets/banner-2.png')",
        'banner-3': "url('/assets/banner-3.png')",
      }
    },
  },
  plugins: [],
};
