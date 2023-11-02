import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataTeachers, getColumnData } from 'src/store/selectors';
import { changeValue } from 'src/store/slice';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import Select from 'src/UI/shared/select';
import * as S from './index.styles';

const Offset: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const dispatch = useAppDispatch();
  const scheduleTeachers = useAppSelector(dataTeachers);

  const firstColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, 'firstColumn', 'offset'),
  );
  
  const secondColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, 'secondColumn', 'offset'),
  );

  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );

  return (
    <S.TableRow>
      <S.TableCeil>Зачёт</S.TableCeil>
      <S.TableCeil></S.TableCeil>
      <S.TableCeil>
        <Select
          value={firstColumnSelectValue}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              changeValue({
                value: e.target.value,
                key: 'offset',
                tableNumber,
                columnNumber: 'firstColumn',
              }),
            )
          }
          editionDataTeachers={scheduleTeachers}
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
                  key: 'offset',
                  tableNumber,
                  columnNumber: 'secondColumn',
                }),
              )
            }
            editionDataTeachers={scheduleTeachers}
          />
        </S.TableCeil>
      )}
    </S.TableRow>
  );
};

export default Offset;