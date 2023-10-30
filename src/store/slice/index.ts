import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getScheduleGroups } from '../thunks/getScheduleGroups'
// import { sendDataStudentGroups } from '../thunks/sendDataStudentGroups'
import { DataState } from '../types/types'

const initialColumnData = {
  lectors: '',
  laboratory: '',
  practic: '',
  seminar: '',
  offset: '',
  exam: '',
  countStudents: '',
  notation: '',
  nameForAll:'',
}

const intialTableData = {
  firstColumn: initialColumnData,
  secondColumn: initialColumnData,
  isNewColumn: false,
}

const initialState: DataState = {
  data: [],
  teachers: [],
  formData: [intialTableData, intialTableData, intialTableData],
}

export const educationGroupsSlice = createSlice({
  name: 'educationGroups',
  initialState,
  reducers: {
    readValue: (state, action) => {
      const index = action.payload.index
      const numberColumn = action.payload.numberColumn
      const key = action.payload.key
      const value = action.payload.value
      state.formData[index][numberColumn][key] = value
    },
    addColumn: (state, action) => {
      const index = action.payload.index
      const value = action.payload.value
      state.formData[index].isNewColumn = value
    },
    deleteColumn: (state, action) => {
      const index = action.payload.index
      const value = action.payload.value
      state.formData[index].isNewColumn = value
    },
    getNotation: (state, action) => {
      const value = action.payload.value
      const index = action.payload.index
      state.formData[index].notation = value
    },
    countStudentGroups: (state, action) => {
      const value = action.payload.value
      const numberColumn = action.payload.numberColumn
      const index = action.payload.index
      state.formData[index][numberColumn].countStudents = value
    },
    setNameForAllEducation: (state, action) => {
      const numberColumn = action.payload.numberColumn
      const tableNumber = action.payload.index
      state.formData[tableNumber][numberColumn].nameForAll = action.payload
      console.log('action.payload',action.payload)
    },
  },
  extraReducers: {
    [getScheduleGroups.fulfilled.type]: (
      state: DataState,
      action: PayloadAction<DataState>,
    ) => {
      state.data = action.payload.data
      state.teachers = action.payload.teachers
    },
  },
})

export const {
  readValue,
  addColumn,
  deleteColumn,
  getNotation,
  countStudentGroups,
  setNameForAllEducation,
} = educationGroupsSlice.actions
export const scheduleGroupsReducer = educationGroupsSlice.reducer
