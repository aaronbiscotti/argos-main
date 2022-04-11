module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        navbar: "64px",
        schedule: "700px",
      },
      right: {
        fix: "5rem",
      },
      fontSize: {
        header: "40px",
        logo: "30px",
      },
      gridTemplateRows: {
        9: "repeat(9, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
