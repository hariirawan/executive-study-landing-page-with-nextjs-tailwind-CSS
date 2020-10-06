module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FAFAFA",
        "accent-color": "#FAFAFA",
      },
    },
  },
  variants: {},
  plugins: [],
};
