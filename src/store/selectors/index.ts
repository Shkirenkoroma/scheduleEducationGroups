import { PropertiesStateEducationGroup } from '../types/types';

export const dataTeachers = (state: PropertiesStateEducationGroup) => state.educationGroups.teachers;
export const dataEducationGroups = (state: PropertiesStateEducationGroup) => state.educationGroups.data;
export const dataForm = (state: PropertiesStateEducationGroup) => state.educationGroups.formData;
