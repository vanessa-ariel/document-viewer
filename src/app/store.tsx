import { configureStore } from '@reduxjs/toolkit';
import artboardModalReducer from '../reducers/artboardModalSlice';
import artboardDataReducer from '../reducers/artboardDataSlice';

export const store = configureStore({
  reducer: {
    artboardModal: artboardModalReducer,
    artboardData: artboardDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
