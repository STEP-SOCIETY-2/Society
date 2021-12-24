module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      green: "#314133",
      secondary: "#FFFFFF",
      pink: "#FBF6EE",
      orange: "#F8A272",
      yellow: "#FFCB00",
      gold: "#FFF5CC",
      arch: "#2C4232",
      form: "#FAF6EF",
      muted: "#767C71"
    },
    fontFamily: {
      worksans: ['"Work Sans"', "sans-serif"],
      spacegr: ['"Space Grotesk"', "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
