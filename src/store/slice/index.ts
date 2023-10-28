import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getScheduleGroups } from '../thunks/getScheduleGroups';
import { DataState } from '../types/types';

const initialState: DataState = {
  data: [],
  teachers: [],
};

export const educationGroupsSlice = createSlice({
  name: 'educationGroups',
  initialState,
  reducers: {},
  extraReducers: {
    [getScheduleGroups.fulfilled.type]: (
      state: DataState,
      action: PayloadAction<DataState>,
    ) => {
      state.data = action.payload.data
      state.teachers = action.payload.teachers
    },
  },
});

export const scheduleGroupsReducer = educationGroupsSlice.reducer;
