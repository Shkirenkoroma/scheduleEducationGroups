import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { countStudentGroups } from 'src/store/slice';
import { DataGroup } from 'src/store/types/types';
import { Input } from 'src/UI/shared/input';
import * as Style from './index.styles';

interface CountStudentsProps {
  educationGroupsItem: DataGroup
  index: number
};

const CountStudents: FC<CountStudentsProps> = ({
  educationGroupsItem,
  index,
}): JSX.Element => {

  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  );

  const dispatch = useAppDispatch()
  const [countStudentFirstGroup, setCountStudentFirstGroup] = useState<string>(
    `${Math.ceil(educationGroupsItem.studentsNumber / 2)}`,
  );
  const [countStudentSecondGroup, setCountStudentSecondGroup] = useState<
    string
  >(`${Math.floor(educationGroupsItem.studentsNumber / 2)}`);

  const quantityStudentFirstGroup = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCountStudentFirstGroup(e.target.value)
    dispatch(countStudentGroups({ index: index, value: e.target.value,  numberColumn: 'firstColumn' }))
  };
  const quantityStudentSecondGroup = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCountStudentSecondGroup(e.target.value)
    dispatch(countStudentGroups({ index: index, value: e.target.value,  numberColumn: 'secondColumn' }));
  }

  useEffect(() => {
    dispatch(
      countStudentGroups({
        index: index,
        value: countStudentFirstGroup,
        numberColumn: 'firstColumn',
      }),
    )
    dispatch(
      countStudentGroups({
        index: index,
        value: countStudentSecondGroup,
        numberColumn: 'secondColumn',
      }),
    )
  }, []);

  return (
    <Style.TableRow>
      <Style.TableCeil>Количество человек</Style.TableCeil>
      <Style.TableCeil></Style.TableCeil>
      <Style.TableCeil>
        <Input
          type="text"
          value={countStudentFirstGroup}
          onChange={quantityStudentFirstGroup}
        />
      </Style.TableCeil>
      {isNewColumn && (
        <Style.TableCeil>
          <Input
            type="text"
            value={countStudentSecondGroup}
            onChange={quantityStudentSecondGroup}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
}
export default CountStudents;
