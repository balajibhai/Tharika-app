import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageNavID } from "../PageNavID";

interface navState {
  navId: PageNavID;
}

const initialState: navState = {
  navId: PageNavID.HOME,
};

const navSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    clickHandler: (state, action: PayloadAction<PageNavID>) => {
      state.navId = action.payload;
    },
  },
});

export const { clickHandler } = navSlice.actions;
export default navSlice.reducer;
