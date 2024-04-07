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
        'firstBgColour': '#0A0A0A',
        'secondBgColour':'#F5F5F7',
        'thirdBgColour': '#574B63',
        'mainTextColour': '#717171',
        'secondTextColour': '#F5F5F5',
        'mainColour': '#490E84',
        'redColor' : '#8b0000',
      },
    },
  },
  plugins: [],
};
