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

const indexFinder = (items: MediaItem[], id: string) =>
  items.findIndex((item) => item.id === id);

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
        note?: boolean;
      }>
    ) => {
      const { id, selectedValue, note } = action.payload;
      if (!note) {
        state[selectedValue] = state[selectedValue].filter(
          (item) => item.id !== id
        ); // Delete media
      } else {
        const itemIndex = indexFinder(state[selectedValue], id);
        if (itemIndex !== -1) {
          state[selectedValue][itemIndex].note.title = "";
          state[selectedValue][itemIndex].note.description = "";
        }
      }
    },
    handleNoteEdit: (
      state,
      action: PayloadAction<{
        id: string;
        selectedValue: string;
        updatedValue: MediaItem;
      }>
    ) => {
      const { id, selectedValue, updatedValue } = action.payload;
      const itemIndex = indexFinder(state[selectedValue], id);
      state[selectedValue][itemIndex] = updatedValue;
    },
  },
});

export const { handleMediaUpload, handleMediaDelete, handleNoteEdit } =
  mediaUploaderSlice.actions;
export default mediaUploaderSlice.reducer;
