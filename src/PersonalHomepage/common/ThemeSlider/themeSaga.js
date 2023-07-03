import { select, call, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectThemeState } from "./themeSlice";

function* saveThemeHandler() {
  const setTheme = yield select(selectThemeState);
  yield call(saveThemeInLocalStorage, setTheme);
}

export function* saveThemeSaga() {
  yield takeEvery("*", saveThemeHandler);
}
