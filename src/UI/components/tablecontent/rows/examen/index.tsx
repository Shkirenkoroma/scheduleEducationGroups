import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataTeachers, getColumnData } from 'src/store/selectors';
import { changeValue } from 'src/store/slice';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

const Examen: FC = (): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const { tableNumber } = useTableContext();
  const dispatch = useAppDispatch();

   const firstColumnSelectValue = useAppSelector((state) =>
     getColumnData(state, tableNumber, 'firstColumn', 'exam'),
   );
   
   const secondColumnSelectValue = useAppSelector((state) =>
     getColumnData(state, tableNumber, 'secondColumn', 'exam'),
   );
   
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );

  return (
    <Style.TableRow>
      <Style.TableCeil>Экзамен</Style.TableCeil>
      <Style.TableCeil></Style.TableCeil>
      <Style.TableCeil>
        <Select
          value={firstColumnSelectValue}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              changeValue({
                value: e.target.value,
                key: 'exam',
                tableNumber,
                columnNumber: 'firstColumn',
              }),
            )
          }
          editionDataTeachers={scheduleTeachers}
        />
      </Style.TableCeil>
      {isNewColumn && (
        <Style.TableCeil>
          <Select
            value={secondColumnSelectValue}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              dispatch(
                changeValue({
                  value: e.target.value,
                  key: 'exam',
                  tableNumber,
                  columnNumber: 'secondColumn',
                }),
              )
            }
            editionDataTeachers={scheduleTeachers}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  );
};

export default Examen;
