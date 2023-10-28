import { configureStore } from '@reduxjs/toolkit';
import { scheduleGroupsReducer } from './slice';

export const store = configureStore({
  reducer: {
    educationGroups: scheduleGroupsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
