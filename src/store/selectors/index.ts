import { PropertiesStateTeachers, PropertiesStateEducationGroup } from '../types/types';

export const dataTeachers = (state: PropertiesStateTeachers) => state.educationGroups.teachers;
export const dataEducationGroups = (state: PropertiesStateEducationGroup) => state.educationGroups.data;
