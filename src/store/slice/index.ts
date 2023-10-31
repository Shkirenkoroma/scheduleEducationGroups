import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  defaultValueOption,
  intialTableData,
  teachersSelects,
} from 'src/utils/consts';
import { getScheduleGroups } from '../thunks/getScheduleGroups';
import { DataState } from '../types/types';

const initialState: DataState = {
  data: [],
  teachers: [],
  formData: Array(3).fill(intialTableData),
};

export const educationGroupsSlice = createSlice({
  name: 'educationGroups',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      const { tableNumber, columnNumber, key, value } = action.payload;
      state.formData[tableNumber][columnNumber][key] = value;
    },
    setNewColumn: (state, action) => {
      const { tableNumber, isNewColumn } = action.payload;
      state.formData[tableNumber].isNewColumn = isNewColumn;
    },
    setNotation: (state, action) => {
      const { value, tableNumber } = action.payload;
      state.formData[tableNumber].notation = value;
    },
    setCountStudentGroups: (state, action) => {
      const { tableNumber, columnNumber, value } = action.payload;
      state.formData[tableNumber][columnNumber].countStudents = value;
    },
    applyTeachersSelects: (state, action) => {
      const { tableNumber, columnNumber } = action.payload;
      const formData = state.formData[tableNumber][columnNumber];
      teachersSelects.forEach((teacher) => {
      formData[teacher] = state.formData[tableNumber][columnNumber]['lectors'];
      });
    },
  },
  extraReducers: {
    [getScheduleGroups.fulfilled.type]: (
      state: DataState,
      action: PayloadAction<DataState>,
    ) => {
      state.data = action.payload.data;
      state.teachers = [defaultValueOption, ...action.payload.teachers];
    },
  },
});

export const {
  changeValue,
  setNewColumn,
  setNotation,
  setCountStudentGroups,
  applyTeachersSelects,
} = educationGroupsSlice.actions;
export const scheduleGroupsReducer = educationGroupsSlice.reducer;
