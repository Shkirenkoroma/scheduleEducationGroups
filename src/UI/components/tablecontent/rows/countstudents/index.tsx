import { ChangeEvent, FC, useState } from 'react';
import { DataGroup } from 'src/store/types/types';
import { Input } from 'src/UI/shared/input';
import * as Style from './index.styles';

interface CountStudentsProps {
  educationGroupsItem: DataGroup,
  column:boolean
};

const CountStudents: FC<CountStudentsProps> = ({
  educationGroupsItem,
  column
}): JSX.Element => {
  const [countStudentFirstGroup, setCountStudentFirstGroup] = useState<string>(
    `${Math.ceil(educationGroupsItem.studentsNumber / 2)}`,
  );
  const [countStudentSecondGroup, setCountStudentSecondGroup] = useState<
    string
  >(`${Math.floor(educationGroupsItem.studentsNumber / 2)}`);

  const addCountStudentFirstGroup = (count: string): void => {
    setCountStudentFirstGroup(count)
  };

  const addCountStudentSecondGroup = (count: string): void => {
    setCountStudentSecondGroup(count)
  };

  return (
    <Style.TableRow>
      <Style.TableCeil>Количество человек</Style.TableCeil>
      <Style.TableCeil></Style.TableCeil>
      <Style.TableCeil>
        <Input
          type="text"
          value={countStudentFirstGroup}
          onChange={(e) => addCountStudentFirstGroup(e.target.value)}
        />
      </Style.TableCeil>
      {column && (
        <Style.TableCeil>
          <Input
            type="text"
            value={countStudentSecondGroup}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              addCountStudentSecondGroup(e.target.value)
            }
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}
export default CountStudents;
