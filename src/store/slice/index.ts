import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  defaultValueOption,
  intialTableData,
  teachersSelects,
} from 'src/utils/consts';
import { getScheduleGroups } from '../thunks/getScheduleGroups';
import { sendDataStudentGroups } from '../thunks/sendDataStudentGroups';
import { DataState, TablePayload } from '../types/types';

const initialState: DataState = {
  data: [],
  teachers: [],
  formData: Array(3).fill(intialTableData),
  isLoading: false,
  error: '',
};

export const educationGroupsSlice = createSlice({
  name: 'educationGroups',
  initialState,
  reducers: {
    changeValue: (state, { payload }: PayloadAction<TablePayload>) => {
      const { tableNumber, columnNumber, key, value } = payload
      state.formData[tableNumber][columnNumber!][key!] = value!
    },
    setNewColumn: (state, { payload }: PayloadAction<TablePayload>) => {
      const { tableNumber, isNewColumn } = payload
      state.formData[tableNumber].isNewColumn = isNewColumn!
    },
    setNotation: (state, { payload }: PayloadAction<TablePayload>) => {
      const { value, tableNumber } = payload
      state.formData[tableNumber].notation = value!
    },
    setCountStudentGroups: (
      state,
      { payload }: PayloadAction<TablePayload>,
    ) => {
      const { tableNumber, columnNumber, value } = payload
      state.formData[tableNumber][columnNumber!].countStudents = value!
    },
    applyTeachersSelects: (state, { payload }: PayloadAction<TablePayload>) => {
      const { tableNumber, columnNumber } = payload
      const formData = state.formData[tableNumber][columnNumber!]
      teachersSelects.forEach((teacher) => {
        formData[teacher] =
          state.formData[tableNumber][columnNumber!]['lectors']
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getScheduleGroups.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getScheduleGroups.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.teachers = [defaultValueOption, ...action.payload.teachers]
        state.isLoading = false
      })
      .addCase(getScheduleGroups.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(sendDataStudentGroups.pending, (state) => {
        state.isLoading = true
      })
      .addCase(sendDataStudentGroups.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(sendDataStudentGroups.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
});

export const {
  changeValue,
  setNewColumn,
  setNotation,
  setCountStudentGroups,
  applyTeachersSelects,
} = educationGroupsSlice.actions
export const scheduleGroupsReducer = educationGroupsSlice.reducer;
