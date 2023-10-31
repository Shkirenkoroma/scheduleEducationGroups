import { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks';
import { dataTeachers, getColumnData } from 'src/store/selectors';
import { changeValue } from 'src/store/slice';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

const Laboratory: FC = (): JSX.Element => {
  const scheduleTeachers = useAppSelector(dataTeachers);
  const { tableNumber } = useTableContext();
  const dispatch = useDispatch();

  const firstColumnSelectValue = useAppSelector(
    (state) => getColumnData(state, tableNumber, 'firstColumn', 'laboratory'),
  );

  const secondColumnSelectValue = useAppSelector(
    (state) => getColumnData(state, tableNumber, 'secondColumn', 'laboratory'),
  );

  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );
  
  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );

  return (
    <Style.TableRow>
      <Style.TableCeil>Лабораторные работы</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.laboratoryHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
          value={firstColumnSelectValue}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              changeValue({
                value: e.target.value,
                key: 'laboratory',
                tableNumber,
                columnNumber: 'firstColumn',
              }),
            )
          }
          editionDataTeachers={scheduleTeachers}
          disabled={!Number(educationGroupsItem.laboratoryHours)}
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
                  key: 'laboratory',
                  tableNumber,
                  columnNumber: 'secondColumn',
                }),
              )
            }
            editionDataTeachers={scheduleTeachers}
            disabled={!Number(educationGroupsItem.laboratoryHours)}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  );
};

export default Laboratory;
