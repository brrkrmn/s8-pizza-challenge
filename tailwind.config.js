module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ['"Roboto Condensed"', "sans-serif"],
      barlow: ['"Barlow"', "sans-serif"],
      quattrocento: ['"Quattrocento"', "serif"],
      satisfy: ['"Satisfy"', "cursive"],
    },
    screens: {
      mobile: "425px",
      tablet: "768px",
      laptop: "1024px",
    },
    colors: {
      transparent: "transparent",
      yellow: {
        DEFAULT: "#FDC913",
        light: "#FFEECC",
      },
      red: "#CE2829",
      beige: "#FAF7F2",
      white: "#FFFFFF",
      gray: {
        light: "#5F5F5F",
        medium: "#292929",
        dark: "#1A1A1A",
      },
      divider: "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
};
