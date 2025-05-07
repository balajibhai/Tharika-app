import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../ComponentTypes";

interface ProfileListState {
  profiles: Profile[];
}

const initialState: ProfileListState = {
  profiles: [
    { id: 1, name: "Jenny" },
    { id: 2, name: "Jacob" },
    { id: 3, name: "Rustyn" },
    { id: 4, name: "Ileana" },
  ],
};

const profileListSlice = createSlice({
  name: "profileList",
  initialState,
  reducers: {
    addProfile(state, action: PayloadAction<Profile>) {
      state.profiles.push(action.payload);
    },
    removeProfile(state, action: PayloadAction<number>) {
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== action.payload
      );
    },
  },
});

export const { addProfile, removeProfile } = profileListSlice.actions;

export default profileListSlice.reducer;
