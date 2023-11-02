import { PropertiesStateEducationGroup } from '../types/types';

export const dataTeachers = (state: PropertiesStateEducationGroup) =>
  state.educationGroups.teachers;

export const dataEducationGroups = (state: PropertiesStateEducationGroup) =>
  state.educationGroups.data;

export const getDataForm = (state: PropertiesStateEducationGroup) =>
  state.educationGroups.formData;

export const loading = (state: PropertiesStateEducationGroup) =>
  state.educationGroups.isLoading;

export const getColumnData =  (
  state: PropertiesStateEducationGroup,
  tableNum: number,
  colKey: string,
  objKey: string,
) => state.educationGroups.formData[tableNum][colKey][objKey];
