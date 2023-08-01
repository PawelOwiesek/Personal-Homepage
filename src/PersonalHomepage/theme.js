import {
  nightImage,
  dayImage,
} from "../PersonalHomepage/common/ThemeSlider/images";

const colors = {
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  slateGray: "#6E7E91",
  white: "#FFFFFF",
  black: "#000000",
  whiteLilac: "#FBFBFE",
  mineShaft: "#252525",
  mercury: "#E5E5E5",
  lightGray: "#363636b8",
  iron: "#d1d5da1a",
  lightIron: "#d1d5da4d",
  silver: "#7e7e7e",
  linkBlue: "#0366d633",
  linkDark: "#2188ff66",
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

  skillSection: {
    background: colors.white,
  },

  divider: {
    background: colors.lightIron,
  },

  repoTitle: {
    color: colors.scienceBlue,
  },

  linkOnderLine: {
    color: colors.linkBlue,
  },

  hover: {
    color: colors.linkBlue,
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

  skillSection: {
    background: colors.lightGray,
  },

  divider: {
    background: colors.iron,
  },

  repoTitle: {
    color: colors.white,
  },

  linkOnderLine: {
    color: colors.linkDark,
  },

  hover: {
    color: colors.dodgerBlue,
  },
};
