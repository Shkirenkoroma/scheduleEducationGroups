import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataTeachers, getColumnData } from 'src/store/selectors';
import { changeValue } from 'src/store/slice';
import { ColumnNumber } from 'src/store/types/types';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import Select from 'src/UI/shared/select';
import * as S from './index.styles';

const Practic: FC = (): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const { tableNumber } = useTableContext();
  const dispatch = useAppDispatch();

  const firstColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, ColumnNumber.firstColumn, 'practic'),
  );
  
  const secondColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, ColumnNumber.secondColumn, 'practic'),
  );

  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );
  
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );

  return (
    <S.TableRow>
      <S.TableCeil>Практические</S.TableCeil>
      <S.TableCeil>{educationGroupsItem.practicHours}</S.TableCeil>
      <S.TableCeil>
        <Select
          value={firstColumnSelectValue}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              changeValue({
                value: e.target.value,
                key: 'practic',
                tableNumber,
                columnNumber: ColumnNumber.firstColumn,
              }),
            )
          }
          editionDataTeachers={scheduleTeachers}
          disabled={!Number(educationGroupsItem.practicHours)}
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
                  key: 'practic',
                  tableNumber,
                  columnNumber: ColumnNumber.secondColumn,
                }),
              )
            }
            editionDataTeachers={scheduleTeachers}
            disabled={!Number(educationGroupsItem.practicHours)}
          />
        </S.TableCeil>
      )}
    </S.TableRow>
  );
};

export default Practic;
