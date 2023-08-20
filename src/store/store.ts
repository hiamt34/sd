import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";


import rootSaga from "./rootSaga";
import designerReducer from "./designer/designerSlice";


const rootReducer = combineReducers({
  designer: designerReducer,
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
