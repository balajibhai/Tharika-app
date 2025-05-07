import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
  loginState: boolean;
  credentials: {
    username: string;
    password: string;
  };
}

const initialState: authState = {
  loginState: false,
  credentials: {
    username: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginHandler: (state, action: PayloadAction<boolean>) => {
      state.loginState = action.payload;
    },
    credentialsHandler: (
      state,
      action: PayloadAction<{
        username: string;
        password: string;
      }>
    ) => {
      const { password, username } = action.payload;
      state.credentials.username = username;
      state.credentials.password = password;
    },
  },
});

export const { loginHandler, credentialsHandler } = authSlice.actions;
export default authSlice.reducer;
