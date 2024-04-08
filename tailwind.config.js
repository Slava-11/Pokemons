/ @type {import('tailwindcss').Config} */;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: '375px',
        forDesktop: "1024px",
        forDesktopHD: "1440px",
        fullHD: "1920px",
      },
      boxShadow: {
        'custom': '2px 5px 25px -3px rgba(180, 180, 180, 0.25)',
      },
      colors: {
        'black': '#000',
        'white': '#fff',
        'mainBg': '#D70A28'
      },
    },
  },
  plugins: [],
};
