export const saveThemeInLocalStorage = (isTheme) => {
  localStorage.setItem("theme", JSON.stringify(isTheme));
};

export const themeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("theme"));
};
