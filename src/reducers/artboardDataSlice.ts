import { createSlice } from '@reduxjs/toolkit';

export const artboardDataSlice = createSlice({
  name: 'artboardData',
  initialState: {
    artboardArr: [],
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
      state.artboardArr = action.payload;
    },
    openArtboard: (state, action) => {
      state.currentArtboardIndex = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, addArray, openArtboard } =
  artboardDataSlice.actions;

export default artboardDataSlice.reducer;
