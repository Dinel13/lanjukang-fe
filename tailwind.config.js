module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //tidak menimpa font defult sans serif none
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        signika: ["signika", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
