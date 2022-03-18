module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00B188",
        secondary: "#009a75",
        tertiary: "#1F2937",
        primarylight: "#1F2937",
        lightgreen: "#D4E3E0",
        lightgreenhover: "#B1DAD2",
        btncolor: "#00B188",
        btnhover: "#009a75",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
