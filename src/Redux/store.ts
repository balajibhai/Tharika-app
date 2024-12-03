import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./pagenavigation";
import mediaReducer from "./mediauploadhandler";
import authenticationReducer from "./authentication";

const store = configureStore({
  reducer: {
    pageSelect: navReducer,
    mediaHandler: mediaReducer,
    authenticationReducer: authenticationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
