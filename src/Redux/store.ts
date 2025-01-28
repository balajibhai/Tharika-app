import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./pagenavigation";
import mediaReducer from "./mediauploadhandler";
import authenticationReducer from "./authentication";
import profileListSlice from "./profileselector";
import categorySelectorSlice from "./categoryselector";

const store = configureStore({
  reducer: {
    pageSelect: navReducer,
    mediaHandler: mediaReducer,
    authenticationReducer: authenticationReducer,
    profileSelect: profileListSlice,
    categorySelect: categorySelectorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
