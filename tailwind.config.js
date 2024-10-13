/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      // [size, leading (line-height)]
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '24px'],
      xl: ['20px', '28px'],
      '2xl': ['22px', '29.26px'],
      '3xl': ['26px', '30px'],
      '4xl': ['30px', '38px'],
      '5xl': ['40px', '50px'],
      '6xl': ['52px', '60px'],
      '7xl': ['65px', '80px'],
    },

    extend: {
      fontFamily: {
        gothic: ['century-gothic', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      colors: {
        'dark-grey': "#2F2E2D",
        'gold': "#B39E73",
        'light-blue': "#Dee7ed",
        'light-grey': "#888888",
        'light-beige': "#faf3eb",
        'red': "#FF5B5B",
        'green': "#7D7C5A",
      },
    },
  },
  plugins: []
}

