import { configureStore } from '@reduxjs/toolkit';
import artboardModalReducer from '../reducers/artboardModalSlice';
import artboardSliderReducer from '../reducers/artboardSliderSlice';

export const store = configureStore({
  reducer: {
    artboardModal: artboardModalReducer,
    artboardSlider: artboardSliderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
