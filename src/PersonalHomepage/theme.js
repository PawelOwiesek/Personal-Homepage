const mainColors = {
    white: "#FFFFFF",
    black: "#000000",
    whiteLilac: "#FBFBFE",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    mineShaft: "#252525",
  };
  
  export const lightTheme = {
    basic: {
      background: mainColors.whiteLilac,
      mainText: mainColors.black,
    },
    section: {
      background: mainColors.white,
      divider: mainColors.slateGray,
    },
    buttons: {
      background: mainColors.scienceBlue,
      mainText: mainColors.white,
    },
  };
  
  export const darkTheme = {
    basic: {
      background: mainColors.black,
      mainText: mainColors.white,
    },
    section: {
      background: mainColors.mineShaft,
      divider: mainColors.slateGray,
    },
    buttons: {
      background: mainColors.scienceBlue,
      mainText: mainColors.white,
    },
    themeButton:{
        background: mainColors.slateGray
    }
  };