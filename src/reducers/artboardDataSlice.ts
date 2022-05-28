import { createSlice } from '@reduxjs/toolkit';

export const artboardDataSlice = createSlice({
  name: 'artboardData',
  initialState: {
    value: [],
    currentArtboardIndex: 0,
  },
  reducers: {
    nextSlide: (state) => {
      state.currentArtboardIndex += 1;
    },
    prevSlide: (state) => {
      state.currentArtboardIndex -= 1;
    },
    addArray: (state, action) => {
      state.value = action.payload;
    },
    openArtboard: (state, action) => {
      state.currentArtboardIndex = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, addArray, openArtboard } =
  artboardDataSlice.actions;

export default artboardDataSlice.reducer;
