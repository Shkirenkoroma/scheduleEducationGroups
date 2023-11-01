export interface DataGroup {
  subjectName: string
  groupName: string
  course: string
  studentsNumber: number
  semestr: string
  lecturesHours: string
  laboratoryHours: string
  practicHours: string
  seminarHours: string
  exam: boolean
  offset: boolean
};

export interface DataTeacher {
  id: string
  name: string
};

export interface DataState {
  data: DataGroup[]
  teachers: DataTeacher[]
  formData: any
};

export interface PropertiesStateEducationGroup {
  educationGroups: DataState
};
