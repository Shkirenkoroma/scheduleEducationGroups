import { FC, useState } from 'react';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { DataGroup } from 'src/store/types/types';
import Header from '../../header';
import Table from '../../tablecontent/table';
import * as Style from './index.styles';

interface PropsScheduleGroupItem {
  educationGroupsItem: DataGroup
};

const ScheduleGroupsItem: FC<PropsScheduleGroupItem> = ({
  educationGroupsItem,
}): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const [nameLector, setNameLector] = useState<string>('');
  const [nameLabor, setNameLabor] = useState<string>('');
  const [namerPractic, setNamePractic] = useState<string>('');
  const [namerSeminar, setNameSeminar] = useState<string>('');
  const [namerOffset, setNameOffset] = useState<string>('');
  const [namerExam, setNameExam] = useState<string>('');
  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия');
 
 
  const [countStudentSecondGroup, setCountStudentSecondGroup] = useState<
    string
  >(`${Math.floor(educationGroupsItem.studentsNumber / 2)}`);

  const defaultValueOption = { id: '0', name: nameForAllExam };
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers];

  const defaultValueOptionDisabled = { id: '0', name: 'Вакансия' }
  const editionDataTeachersDisabled = [
    defaultValueOptionDisabled,
    ...scheduleTeachers,
  ];

  const setTeacher = (valueOption: string): void => {
    setNameLector(valueOption)
  };

  const addCountStudentSecondGroup = (count: string): void => {
    setCountStudentSecondGroup(count)
  };

  return (
    <Style.ScheduleGroupsContainerItemContainer>
        <Header educationGroupsItem={educationGroupsItem}/>
        <Table educationGroupsItem={educationGroupsItem}/>
    </Style.ScheduleGroupsContainerItemContainer>
  )
};

export default ScheduleGroupsItem;
