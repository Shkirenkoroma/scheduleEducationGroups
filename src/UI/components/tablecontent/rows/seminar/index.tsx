import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { readValue } from 'src/store/slice';
import { DataGroup } from 'src/store/types/types';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface SeminarProps {
  educationGroupsItem:DataGroup,
  index:number
};

export const Seminar: FC<SeminarProps> = ({educationGroupsItem, index}): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )
  const nameForAllEducation = useAppSelector(
    (state) =>
      state.educationGroups?.formData[index].firstColumn.nameForAll.value,
  )
  const dispatch = useDispatch()
  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия');

  const defaultValueOption = { id: '0', name: nameForAllExam };
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers];

  return (
    <Style.TableRow>
      <Style.TableCeil>Семинарские</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.seminarHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
        nameForAllEducation={nameForAllEducation}
          index={index}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(readValue({value: e.target.value, key: 'seminar' , index: index, numberColumn: 'firstColumn'}))
          }
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.seminarHours}
        />
      </Style.TableCeil>
      {isNewColumn && (
        <Style.TableCeil>
          <Select
          nameForAllEducation={nameForAllEducation}
            index={index}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              dispatch(readValue({value: e.target.value, key: 'seminar' , index: index, numberColumn: 'secondColumn'}))
            }
            editionDataTeachers={editionDataTeachers}
            educationHours={educationGroupsItem.seminarHours}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
};

export default Seminar;
