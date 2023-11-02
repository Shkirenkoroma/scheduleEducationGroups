import { StateSchema, ColumnNumber, ColumnDataKey } from '../types/types';

export const dataTeachers = (state: StateSchema) =>
  state.educationGroups.teachers;

export const dataEducationGroups = (state: StateSchema) =>
  state.educationGroups.data;

export const getDataForm = (state: StateSchema) =>
  state.educationGroups.formData;

export const loading = (state: StateSchema) => state.educationGroups.isLoading;

export const getColumnData = (
  state: StateSchema,
  tableNum: number,
  colKey: ColumnNumber,
  objKey: ColumnDataKey,
) => state.educationGroups.formData[tableNum][colKey][objKey];
