/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      red: "hsl(6, 63%, 50%)",
      "dark-red": "hsl(6, 70%, 34%)",
      orange: "hsl(25, 98%, 40%)",
      "dark-orange": "hsl(25, 99%, 27%)",
      "light-grayish-orange": "hsl(30, 25%, 89%)",
      "grayish-orange": "hsl(28, 16%, 65%)",
      "light-grayish-yellow": "hsl(45, 7%, 89%)",
      "dark-grayish-orange": "hsl(35, 11%, 61%)",
      "pure-cyan": "hsl(176, 100%, 44%)",
      "soft-cyan": "hsl(177, 92%, 70%)",
      "very-dark-violet": "hsl(268, 47%, 21%)",
      "dark-magenta": "hsl(290, 70%, 36%)",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      backgroundColor: {
        "main-bg1": "hsl(222, 26%, 31%)",
        "toggle-bg1": "hsl(223, 31%, 20%)",
        "screen-bg1": "hsl(224, 36%, 15%)",
        "key-bg1": "hsl(225, 21%, 49%)",
        "main-bg2": "hsl(0, 0%, 90%)",
        "toggle-bg2": "hsl(0, 5%, 81%)",
        "screen-bg2": "hsl(0, 0%, 93%)",
        "key-bg2": "hsl(185, 42%, 37%)",
        "main-bg3": "hsl(268, 75%, 9%)",
        "toggle-bg3": "hsl(268, 71%, 12%)",
        "screen-bg3": "hsl(268, 71%, 12%)",
        "key-bg3": "hsl(281, 89%, 26%)",
      },
      boxShadow: {
        "key-shadow1": "0 4px 6px hsl(224, 28%, 35%)",
        "key-shadow2": "0 4px 6px hsl(185, 58%, 25%)",
        "key-shadow3": "0 4px 6px hsl(285, 91%, 52%)",
      },
      textColor: {
        "dark-grayish-blue": "hsl(221, 14%, 31%)",
        white: "hsl(0, 0%, 100%)",
        "dark-grayish-yellow": "hsl(60, 10%, 19%)",
        "light-yellow": "hsl(52, 100%, 62%)",
        "very-dark-blue": "hsl(198, 20%, 13%)",
      },

      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      fontWeight: {
        bold: 700,
      },
    },
  },
  plugins: [],
};
