import { configureStore } from '@reduxjs/toolkit';
import dashboardModalReducer from '../reducers/dashboardModalSlice';

export const store = configureStore({
  reducer: {
    dashboardModal: dashboardModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
