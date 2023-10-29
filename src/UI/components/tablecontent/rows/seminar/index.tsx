import { ChangeEvent, FC, useState } from 'react';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { DataGroup } from 'src/store/types/types';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface SeminarProps {
  educationGroupsItem:DataGroup,
  column:boolean
};

export const Seminar: FC<SeminarProps> = ({educationGroupsItem, column}): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const [nameLector, setNameLector] = useState<string>('');
  const [nameLabor, setNameLabor] = useState<string>('');
  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия');

  const setTeacher = (valueOption: string): void => {
    setNameLector(valueOption)
  };

  const defaultValueOption = { id: '0', name: nameForAllExam };
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers];

  return (
    <Style.TableRow>
      <Style.TableCeil>Семинарские</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.seminarHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setTeacher(e.target.value)
          }
          value={nameLector}
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.seminarHours}
        />
      </Style.TableCeil>
      {column && (
        <Style.TableCeil>
          <Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setTeacher(e.target.value)
            }
            value={nameLector}
            editionDataTeachers={editionDataTeachers}
            educationHours={educationGroupsItem.seminarHours}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
};

export default Seminar;
