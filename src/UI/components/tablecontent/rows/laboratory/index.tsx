import { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks';
import { dataTeachers, getColumnData } from 'src/store/selectors';
import { changeValue } from 'src/store/slice';
import { ColumnNumber } from 'src/store/types/types';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import Select from 'src/UI/shared/select';
import * as S from './index.styles';

const Laboratory: FC = (): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const { tableNumber } = useTableContext();
  const dispatch = useDispatch();

  const firstColumnSelectValue = useAppSelector(
    (state) => getColumnData(state, tableNumber, ColumnNumber.firstColumn, 'laboratory'),
  );

  const secondColumnSelectValue = useAppSelector(
    (state) => getColumnData(state, tableNumber, ColumnNumber.secondColumn, 'laboratory'),
  );

  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );
  
  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );

  return (
    <S.TableRow>
      <S.TableCeil>Лабораторные работы</S.TableCeil>
      <S.TableCeil>{educationGroupsItem.laboratoryHours}</S.TableCeil>
      <S.TableCeil>
        <Select
          value={firstColumnSelectValue}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              changeValue({
                value: e.target.value,
                key: 'laboratory',
                tableNumber,
                columnNumber: ColumnNumber.firstColumn,
              }),
            )
          }
          editionDataTeachers={scheduleTeachers}
          disabled={!Number(educationGroupsItem.laboratoryHours)}
        />
      </S.TableCeil>
      {isNewColumn && (
        <S.TableCeil>
          <Select
            value={secondColumnSelectValue}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              dispatch(
                changeValue({
                  value: e.target.value,
                  key: 'laboratory',
                  tableNumber,
                  columnNumber: ColumnNumber.secondColumn,
                }),
              )
            }
            editionDataTeachers={scheduleTeachers}
            disabled={!Number(educationGroupsItem.laboratoryHours)}
          />
        </S.TableCeil>
      )}
    </S.TableRow>
  );
};

export default Laboratory;
