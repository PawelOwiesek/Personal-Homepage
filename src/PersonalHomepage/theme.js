import {
  nightImage,
  dayImage,
} from "../PersonalHomepage/common/ThemeSlider/images";

const colors = {
  scienceBlue: "#0366D6",
  slateGray: "#6E7E91",
  white: "#FFFFFF",
  black: "#000000",
  whiteLilac: "#FBFBFE",
  mineShaft: "#252525",
  mercury: "#E5E5E5",
  lightGray: "#363636",
  iron: "#D1D5DA",
  silver: "#7e7e7e",
};

export const lightTheme = {
  basic: {
    background: colors.whiteLilac,
    text: colors.slateGray,
  },

  titles: {
    color: colors.black,
  },

  buttons: {
    background: colors.scienceBlue,
    text: colors.white,
  },

  themeButton: {
    backgroundImage: dayImage,
  },

  svgIcon: {
    color: colors.white,
  },
};

export const darkTheme = {
  basic: {
    background: colors.mineShaft,
    text: colors.white,
  },

  titles: {
    color: colors.white,
  },

  buttons: {
    background: colors.scienceBlue,
    text: colors.white,
  },

  themeButton: {
    backgroundImage: nightImage,
  },

  svgIcon: {
    color: colors.black,
  },
};
