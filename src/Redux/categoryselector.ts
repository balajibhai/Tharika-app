import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../ComponentTypes";

interface CategorySelectorState {
  categories: Profile[];
}

const initialState: CategorySelectorState = {
  categories: [{ id: 1, name: "Proud moments" }],
};

const categorySelectorSlice = createSlice({
  name: "categorySelector",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Profile>) {
      state.categories.push(action.payload);
    },
    removeCategory(state, action: PayloadAction<number>) {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

export const { addCategory, removeCategory } = categorySelectorSlice.actions;

export default categorySelectorSlice.reducer;
