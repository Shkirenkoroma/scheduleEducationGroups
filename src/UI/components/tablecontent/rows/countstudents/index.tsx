import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setCountStudentGroups } from 'src/store/slice';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import { Input } from 'src/UI/shared/input';
import * as Style from './index.styles';

const CountStudents: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { tableNumber } = useTableContext();
  
  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );
  
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );

  const [countStudentFirstGroup, setCountStudentFirstGroup] = useState<string>(
    `${Math.ceil(educationGroupsItem.studentsNumber / 2)}`,
  );
  
  const [countStudentSecondGroup, setCountStudentSecondGroup] =
    useState<string>(`${Math.floor(educationGroupsItem.studentsNumber / 2)}`);

  const quantityStudentFirstGroup = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCountStudentFirstGroup(e.target.value);
    dispatch(
      setCountStudentGroups({
        tableNumber,
        value: e.target.value,
        columnNumber: 'firstColumn',
      }),
    );
  };
  
  const quantityStudentSecondGroup = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCountStudentSecondGroup(e.target.value);
    dispatch(
      setCountStudentGroups({
        tableNumber,
        value: e.target.value,
        columnNumber: 'secondColumn',
      }),
    );
  };

  useEffect(() => {
    dispatch(
      setCountStudentGroups({
        tableNumber,
        value: countStudentFirstGroup,
        columnNumber: 'firstColumn',
      }),
    );
    dispatch(
      setCountStudentGroups({
        tableNumber,
        value: countStudentSecondGroup,
        columnNumber: 'secondColumn',
      }),
    );
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
  );
};
export default CountStudents;
