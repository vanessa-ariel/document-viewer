import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'artboardSlider',
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
    setOpenArtboard: (state, action) => {
      state.currentArtboardIndex = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, addArray, setOpenArtboard } =
  modalSlice.actions;

export default modalSlice.reducer;
