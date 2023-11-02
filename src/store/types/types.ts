export interface StateSchema {
  educationGroups: DataState;
}

export interface DataGroup {
  subjectName: string;
  groupName: string;
  course: string;
  studentsNumber: number;
  semestr: string;
  lecturesHours: string;
  laboratoryHours: string;
  practicHours: string;
  seminarHours: string;
  exam: boolean;
  offset: boolean;
};

export interface DataTeacher {
  id: string;
  name: string;
};

export interface DataState {
  data: DataGroup[];
  teachers: DataTeacher[];
  formData: TableData[];
  isLoading: boolean;
  error: string;
};

export type ColumnDataKey = keyof ColumnData;

export enum ColumnNumber {
  firstColumn = 'firstColumn',
  secondColumn = 'secondColumn',
};

export interface ColumnData {
  lectors: string;
  laboratory: string;
  practic: string;
  seminar: string;
  offset: string;
  exam: string;
  countStudents: string;
  notation: string;
  nameForAll: string;
};

export interface TableData {
  [ColumnNumber.firstColumn]: ColumnData;
  [ColumnNumber.secondColumn]: ColumnData;
  isNewColumn: boolean;
  notation: string;
};

export interface TablePayload {
  tableNumber: number;
  columnNumber?: ColumnNumber;
  key?: ColumnDataKey;
  value?: string;
  isNewColumn?: boolean;
};
