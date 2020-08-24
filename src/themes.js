const common = {
  mobileBreakpoint: "880px",
  compactMenuBreakpoint: "720px",
  menuHeight: "45px"
}

const lightTheme = {
  ...common,
  general: {
    background: "#f2f2f2",
    pageBackground: "#fff",
    mainColor: "#d40000",
    textColor: "#000",
    subTextColor: "#383838"
  },
  themeSwitch: {
    text: "#a0a0a0",
    textHover: "#000"
  },
  menu: {
    menuBarBg: "#fff",
    menuBarBorder: "#575757",
    mobileMenuButton: "#d40000",
    normalText: "#000",
    normalBg: "#e0e0e0",
    hoverText: "#fff",
    hoverBg: "#d40000",
    darkenBorder: "#c4c4c4"
  },
  widget: {
    background: "#e0e0e0",
    titleBg: "#d40000",
    titleText: "#fff",
    bodyText: "#000",
    hoverColor: "#cfcfcf"
  },
  footer: {
    background: "#e5e5e5",
    border: "#d40000",
    text: "#000"
  },
  comments: {
    background: "#fff"
  }
}

const darkTheme = {
  ...common,
  general: {
    background: "#2b2b2b",
    pageBackground: "#2f2f2f",
    mainColor: "#d40000",
    textColor: "#fff",
    subTextColor: "#cfcfcf"
  },
  themeSwitch: {
    text: "#a0a0a0",
    textHover: "#fff"
  },
  menu: {
    menuBarBg: "#2f2f2f",
    menuBarBorder: "#444444",
    mobileMenuButton: "#d40000",
    normalText: "#fff",
    normalBg: "#3c3c3c",
    hoverText: "#fff",
    hoverBg: "#d40000",
    darkenBorder: "#666666"
  },
  widget: {
    background: "#2d2d2d",
    titleBg: "#d40000",
    titleText: "#fff",
    bodyText: "#fff",
    hoverColor: "#4b4b4b"
  },
  footer: {
    background: "#3c3c3c",
    border: "#d40000",
    text: "#fff"
  },
  comments: {
    background: "#d0d0d0"
  }
}

export { lightTheme, darkTheme }