import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "../PersonalHomepage/common/ThemeSlider/themeSlice";
import gitDataReducer from "../PersonalHomepage/features/Main/gitDataSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    theme: themeReducer,
    gitData: gitDataReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
