/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    container: {
      padding: {
        DEFAUT: "10px",
      },
    },
    screens: {
      sm: "640px",
      md: "830px",
      lg: "1024px",
      xl: "1030px",
    },
    extend: {
      colors: {
        primary: "#1f2039",
        secondary: "#a5b4fc",
        accent: {
          DEFAULT: "#a5b4fc",
          secondary: "#8292dd",
        },
      },
      fontFamily: {
        primary: "Poppins",
      },
      backgroundImage: {
        element1: "url(./assets/img/accueil/element-1.png)",
        element2: "url(./assets/img/accueil/element-2.png)",
        element3: "url(./assets/img/accueil/element-3.png)",
        element4: "url(./assets/img/accueil/element-4.png)",
        element5: "url(./assets/img/accueil/element-5.png)",
        element6: "url(./assets/img/accueil/element-6.png)",
        portrait1: "url(./assets/img/portfolio/portrait1.jpg)",
        portrait2: "url(./assets/img/portfolio/portrait2.jpg)",
        portrait3: "url(./assets/img/portfolio/portrait3.jpg)",
        portrait4: "url(./assets/img/portfolio/portrait4.jpg)",
        portrait5: "url(./assets/img/portfolio/portrait5.jpg)",
        portrait6: "url(./assets/img/portfolio/portrait6.jpg)",
      },
    },
  },
  plugins: [],
};
