import { ChangeEvent, FC } from 'react';
import { DataGroup } from 'src/store/types/types';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface LaboratoryProps {
  educationGroupsItem:DataGroup,
  column:boolean
};

const Laboratory: FC<LaboratoryProps> = ({educationGroupsItem,  column}): JSX.Element => {
  return (
    <Style.TableRow>
      <Style.TableCeil>Лабораторные работы</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.laboratoryHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setTeacher(e.target.value)
          }
          value={nameLector}
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.laboratoryHours}
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
            educationHours={educationGroupsItem.laboratoryHours}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}

export default Laboratory;
