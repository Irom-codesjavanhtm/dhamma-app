// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightYellow: '#FFEA00',
        darkYellow: '#FFC700',
        textGray: '#333333',
      },
    },
  },
  plugins: [],
};
