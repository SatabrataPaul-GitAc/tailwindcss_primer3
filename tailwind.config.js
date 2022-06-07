module.exports = {
    content: ["./*.html"],
    theme: {
      screens: {
        sm: "480px",
        md: "620px",
        lg: "976px",
        xl: "1440px"
      },
      extend: {
        colors: {
          darkGrayishBlue: 'hsl(227, 12%, 61%)',
        },
        backgroundImage: {
          desktopPattern: "url('../bg-intro-desktop.png')",
          mobilePattern: "url('../bg-intro-mobile.png')"
        },
      },
    },
    plugins: [],
  }
  