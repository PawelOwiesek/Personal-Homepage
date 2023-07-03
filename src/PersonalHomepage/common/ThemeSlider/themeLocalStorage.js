import { useSelector } from "react-redux";
import { selectThemeState } from "./themeSlice";

export const SaveThemeInLocalStorage = () => {
  const theme = useSelector(selectThemeState());
  localStorage.setItem("theme", JSON.stringify(theme));
};

export const themeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("theme"));
};
