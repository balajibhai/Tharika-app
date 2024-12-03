import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
  loginState: boolean;
}

const initialState: authState = {
  loginState: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginHandler: (state, action: PayloadAction<boolean>) => {
      state.loginState = action.payload;
    },
  },
});

export const { loginHandler } = authSlice.actions;
export default authSlice.reducer;
