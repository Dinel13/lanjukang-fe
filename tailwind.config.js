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
    screens: {
      '2xs': '400px',
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
