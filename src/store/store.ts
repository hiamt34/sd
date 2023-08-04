import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import categoryReducer from './category/categorySlice';

import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  // category: categoryReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  // devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
