module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('images/hero.jpg')",
        footer: "url('images/footer.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
