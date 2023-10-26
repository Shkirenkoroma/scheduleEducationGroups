import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getScheduleGroups } from './getScheduleGroups';

export interface DataGroup {
  subjectName: string
  groupName: string
  course: string
  studentsNumber: string
  semestr: string
};

export interface DataTeacher {
  id: string
  name: string
};

export interface DataState {
  educationGroups: DataGroup[]
  teachers: DataTeacher[]
};

const initialState: DataState = {
  educationGroups: [],
  teachers: [],
};

export const educationGroupsSlice = createSlice({
  name: 'educationGroups',
  initialState,
  reducers: {},
  extraReducers: {
    [getScheduleGroups.fulfilled.type]: (
      state: DataState,
      action: PayloadAction<any>,
    ) => {
      console.log(action.payload)
      state.educationGroups = action.payload.data
      state.teachers = action.payload.teachers
    },
  },
})

export const scheduleGroupsReducer = educationGroupsSlice.reducer;
