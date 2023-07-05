import { all } from "redux-saga/effects";
import { saveThemeSaga } from "../PersonalHomepage/common/ThemeSlider/themeSaga";
import { gitHubSaga } from "../PersonalHomepage/features/Main/gitDataSaga";

export function* rootSaga() {
  yield all([saveThemeSaga(), gitHubSaga()]);
}
