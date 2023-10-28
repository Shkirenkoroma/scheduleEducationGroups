import { ChangeEvent, FC } from 'react';
import { DataGroup } from 'src/store/types/types';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

interface SeminarProps {
  educationGroupsItem:DataGroup,
  column:boolean
};

export const Seminar: FC<SeminarProps> = ({educationGroupsItem, column}): JSX.Element => {
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
