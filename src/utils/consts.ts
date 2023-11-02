import { ColumnData } from 'src/store/types/types';

export const teachersSelects: (keyof ColumnData)[] = [
  'lectors',
  'laboratory',
  'practic',
  'seminar',
  'offset',
  'exam',
];

const initialColumnData: ColumnData = {
  lectors: '',
  laboratory: '',
  practic: '',
  seminar: '',
  offset: '',
  exam: '',
  countStudents: '',
  notation: '',
  nameForAll: '',
};

export const intialTableData = {
  firstColumn: initialColumnData,
  secondColumn: initialColumnData,
  isNewColumn: false,
};

export const defaultValueOption = { id: '0', name: 'Вакансия' };
