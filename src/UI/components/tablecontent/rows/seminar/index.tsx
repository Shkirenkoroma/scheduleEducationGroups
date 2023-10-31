import { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks';
import { dataTeachers, getColumnData } from 'src/store/selectors';
import { changeValue } from 'src/store/slice';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import Select from 'src/UI/shared/select';
import * as Style from './index.styles';

export const Seminar: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const dispatch = useDispatch();
  const scheduleTeachers = useAppSelector(dataTeachers);

  const firstColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, 'firstColumn', 'seminar'),
  );
  
  const secondColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, 'secondColumn', 'seminar'),
  );

  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );

  return (
    <Style.TableRow>
      <Style.TableCeil>Семинарские</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.seminarHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
          value={firstColumnSelectValue}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            dispatch(
              changeValue({
                value: e.target.value,
                key: 'seminar',
                tableNumber,
                columnNumber: 'firstColumn',
              }),
            )
          }
          editionDataTeachers={scheduleTeachers}
          disabled={!Number(educationGroupsItem.seminarHours)}
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
                  key: 'seminar',
                  tableNumber,
                  columnNumber: 'secondColumn',
                }),
              )
            }
            editionDataTeachers={scheduleTeachers}
            disabled={!Number(educationGroupsItem.seminarHours)}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  );
};

export default Seminar;
