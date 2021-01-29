import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { createReducer } from "./reducers";

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: createReducer(),
    middleware: middlewares,
  });

  return store;
};

export default configureAppStore;
