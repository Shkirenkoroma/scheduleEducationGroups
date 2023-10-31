import { ChangeEvent, FC, HTMLAttributes } from 'react';
import { DataTeacher } from 'src/store/types/types';
import * as S from './index.styles';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  editionDataTeachers: DataTeacher[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  value?: string;
};

export const Select: FC<SelectProps> = ({
  onChange,
  editionDataTeachers,
  disabled,
  value = editionDataTeachers[0].name,
}): JSX.Element => {
  const selectValue = disabled ? editionDataTeachers[0].name : value;

  return (
    <S.Select value={selectValue} onChange={onChange} disabled={disabled}>
      {editionDataTeachers.map((el: DataTeacher, index: number) => (
        <S.SelectOption value={el.name} key={index}>
          {el.name}
        </S.SelectOption>
      ))}
    </S.Select>
  );
};

export default Select;
