import { ChangeEvent, FC, useState } from 'react';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { DataGroup } from 'src/store/types/types';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface PracticProps {
  educationGroupsItem:DataGroup,
  column:boolean
};

const Practic:FC<PracticProps>= ({educationGroupsItem, column}):JSX.Element => {
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
      <Style.TableCeil>Практические</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.practicHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setTeacher(e.target.value)
          }
          value={nameLector}
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.practicHours}
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
            educationHours={educationGroupsItem.practicHours}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
};

export default Practic;
