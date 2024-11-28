import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./pagenavigation";

const store = configureStore({
  reducer: {
    pageSelect: navReducer, // Register reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
