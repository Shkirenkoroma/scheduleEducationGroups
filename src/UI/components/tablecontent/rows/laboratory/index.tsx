import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks';
import { dataTeachers } from 'src/store/selectors';
import { readValue } from 'src/store/slice';
import { DataGroup } from 'src/store/types/types';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface LaboratoryProps {
  educationGroupsItem:DataGroup,
index:number
};

const Laboratory: FC<LaboratoryProps> = ({educationGroupsItem, index}): JSX.Element => {
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )
  const nameForAllEducation = useAppSelector(
    (state) =>
      state.educationGroups?.formData[index].firstColumn.nameForAll.value,
  )
console.log('nameForAllEducationапрапрпара', nameForAllEducation)
  const scheduleTeachers = useAppSelector(dataTeachers);
    const dispatch = useDispatch()

  const [nameForAllExam, setNameForAllExam] = useState<string>('Вакансия');


  const defaultValueOption = { id: '0', name: nameForAllExam };
  const editionDataTeachers = [defaultValueOption, ...scheduleTeachers];
  return (
    <Style.TableRow>
      <Style.TableCeil>Лабораторные работы</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.laboratoryHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
        nameForAllEducation={nameForAllEducation}
        index={index}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(readValue({value: e.target.value, key: 'laboratory' , index: index, numberColumn: 'firstColumn'}))
          }
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.laboratoryHours}
        />
      </Style.TableCeil>
      {isNewColumn && (
        <Style.TableCeil>
          <Select
              nameForAllEducation={nameForAllEducation}
            index={index}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              dispatch(readValue({value: e.target.value, key: 'laboratory' , index: index, numberColumn: 'secondColumn'}))
            }
            editionDataTeachers={editionDataTeachers}
            educationHours={educationGroupsItem.laboratoryHours}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}

export default Laboratory;
