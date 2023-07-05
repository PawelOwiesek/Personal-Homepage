import { call, put, delay, takeLatest } from "redux-saga/effects";
import { gitHubRepositories } from "./fetchGitHubData";
import {
  fetchGitData,
  fetchGitDataSuccess,
  fetchGitDataFailure,
} from "./gitDataSlice";

function* fetchGitHubDataHandler() {
  try {
    yield delay(1000);
    const repositories = yield call(gitHubRepositories);
    yield put(fetchGitDataSuccess(repositories));
  } catch (error) {
    yield call(fetchGitDataFailure(error));
  }
}

export function* gitHubSaga() {
  yield takeLatest(fetchGitData.type, fetchGitHubDataHandler);
}
