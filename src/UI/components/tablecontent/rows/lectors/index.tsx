import { FC, ChangeEvent, useState } from 'react';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { DataGroup } from 'src/store/types/types';
import Button from 'src/UI/shared/button';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface LectorsProps {
  educationGroupsItem: DataGroup,
  column:boolean
};

const Lectors: FC<LectorsProps>= ({educationGroupsItem, column}): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия');
  const [nameLector, setNameLector] = useState<string>('');

  const applyNameTeacherAllEducationGroup = (): void => {
    setNameForAllExam(nameLector)
  };

  const setTeacher = (valueOption: string): void => {
    setNameLector(valueOption)
  };

  const defaultValueOption = { id: '0', name: nameForAllExam };
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers];
  
  return (
    <Style.TableRow>
      <Style.TableCeil>Лекции</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.lecturesHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setTeacher(e.target.value)
          }
          value={nameLector}
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.lecturesHours}
        />
        <Button
          onClick={applyNameTeacherAllEducationGroup}
          buttonName="ApplyAllEnable"
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
            educationHours={educationGroupsItem.lecturesHours}
          />
          <Button
            onClick={applyNameTeacherAllEducationGroup}
            buttonName="ApplyAllEnable"
          >
            ApplyAllEnable
          </Button>
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}

export default Lectors;
