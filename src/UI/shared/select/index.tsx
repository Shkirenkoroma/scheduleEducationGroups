import { ChangeEvent, FC, HTMLAttributes } from 'react';
import { DataTeacher } from 'src/store/types/types';
import * as Style from './index.styles';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  value: string
  editionDataTeachers: DataTeacher[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  educationHours?: string
};

export const Select: FC<SelectProps> = ({
  onChange,
  value,
  editionDataTeachers,
  educationHours,
}): JSX.Element => {

  return (
    <Style.Select
      onChange={onChange}
      value={value}
      disabled={Number(educationHours) ? false : true}
    >
      {editionDataTeachers.map((el: DataTeacher) => (
        <Style.SelectOption value={el.name}>{el.name}</Style.SelectOption>
      ))}
    </Style.Select>
  )
}

export default Select;
