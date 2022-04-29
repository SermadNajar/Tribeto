module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],

  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-fast": "spin 0.7s linear infinite",
      },
      width: {
        68: "68px",
        88: "88px",
        275: "275px",
        290: "290px",
        350: "350px",
        600: "600px",
      },

      colors: {
        primary: "#00B188",
        secondary: "#009a75",
        tertiary: "#1F2937",
        primarylight: "#1F2937",
        lightgreen: "#D4E3E0",
        lightgreenhover: "#B1DAD2",
        btncolor: "#00B188",
        btnhover: "#009a75",
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
        height: {
          50: "15rem",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("flowbite/plugin"),
    require("daisyui"),
  ],
};
