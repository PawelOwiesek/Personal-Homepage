import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "../PersonalHomepage/common/ThemeSlider/themeSlice";
import { saveThemeSaga } from "./common/ThemeSlider/themeSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: themeReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saveThemeSaga);

export default store;
