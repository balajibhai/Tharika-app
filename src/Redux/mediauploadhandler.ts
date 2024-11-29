import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MediaItem } from "../ComponentTypes";

export interface MediaCategoryState {
  [key: string]: MediaItem[]; // Dynamic keys for categories
}

const initialState: MediaCategoryState = {
  allMedia: [],
  LastMonthMedia: [],
  joyfulMedia: [],
};

const mediaUploaderSlice = createSlice({
  name: "uploadMedia",
  initialState,
  reducers: {
    handleMediaUpload: (
      state,
      action: PayloadAction<{
        list: MediaItem[];
        selectedValue: string;
      }>
    ) => {
      const { list, selectedValue } = action.payload;
      state[selectedValue] = [...state[selectedValue], ...list]; // Add media
    },
    handleMediaDelete: (
      state,
      action: PayloadAction<{
        id: string;
        selectedValue: string;
      }>
    ) => {
      const { id, selectedValue } = action.payload;
      state[selectedValue] = state[selectedValue].filter(
        (item) => item.id !== id
      ); // Delete media
    },
  },
});

export const { handleMediaUpload, handleMediaDelete } =
  mediaUploaderSlice.actions;
export default mediaUploaderSlice.reducer;
