export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-bg': "url('/image-product-mobile.jpg')",
        'mobile-bg': "url('/image-product-desktop.jpg')",
      },
      colors: {
        primary: {
          darkcyan: 'hsl(158, 36%, 37%)',
          cream: 'hsl(30, 38%, 92%)',
        },
        neutral: {
          verydarkBlue: 'hsl(212, 21%, 14%)',
          darkgrayishBlue: 'hsl(228, 12%, 48%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
      },
      fontSize: {
        body: '16px',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-synthesis-none': {
          'font-synthesis': 'none',
        },
        '.text-rendering-optimize': {
          'text-rendering': 'optimizeLegibility',
        },
      });
    },
  ],
};
