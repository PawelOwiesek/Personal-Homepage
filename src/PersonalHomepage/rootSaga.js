import { all } from "redux-saga/effects";
import { gitHubSaga } from "../PersonalHomepage/features/Main/gitDataSaga";

export function* rootSaga() {
  yield all([gitHubSaga()]);
}
