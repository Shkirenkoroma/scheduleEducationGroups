import { FC, ChangeEvent } from 'react';
import { FaSortAmountDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { dataTeachers, getColumnData } from 'src/store/selectors';
import { changeValue, applyTeachersSelects } from 'src/store/slice';
import { ColumnNumber } from 'src/store/types/types';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import Select from 'src/UI/shared/select';
import * as S from './index.styles';

const Lectors: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const dispatch = useAppDispatch();
  const scheduleTeachers = useAppSelector(dataTeachers);

  const firstColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, ColumnNumber.firstColumn, 'lectors'),
  );
  
  const secondColumnSelectValue = useAppSelector((state) =>
    getColumnData(state, tableNumber, ColumnNumber.secondColumn, 'lectors'),
  );

  const educationGroupsItem = useAppSelector(
    (state) => state.educationGroups.data[tableNumber],
  );
  
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );

  const applyNameTeacherAllEducationGroup = (columnNumber: ColumnNumber): void => {
    dispatch(
      applyTeachersSelects({ tableNumber, columnNumber }),
    );
  };

  return (
    <S.TableRow>
      <S.TableCeil>Лекции</S.TableCeil>
      <S.TableCeil>{educationGroupsItem.lecturesHours}</S.TableCeil>
      <S.TableCeil>
        <S.ContainerHead>
          <Select
            value={firstColumnSelectValue}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              dispatch(
                changeValue({
                  value: e.target.value,
                  key: 'lectors',
                  tableNumber,
                  columnNumber: ColumnNumber.firstColumn,
                }),
              );
            }}
            editionDataTeachers={scheduleTeachers}
            disabled={!Number(educationGroupsItem.lecturesHours)}
          />
          <S.ContainerIcon >
            <FaSortAmountDown
              onClick={() => applyNameTeacherAllEducationGroup(ColumnNumber.firstColumn)}
              style={{
                cursor: 'pointer',
                padding: 10,
                backgroundColor: '#303a65',
                borderRadius: 4,
                marginLeft: 4,
              }}
            />
          </S.ContainerIcon>
        </S.ContainerHead>
      </S.TableCeil>
      {isNewColumn && (
        <S.TableCeil>
          <S.ContainerHead>
            <Select
              value={secondColumnSelectValue}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                dispatch(
                  changeValue({
                    value: e.target.value,
                    key: 'lectors',
                    tableNumber,
                    columnNumber: ColumnNumber.secondColumn,
                  }),
                )
              }
              editionDataTeachers={scheduleTeachers}
              disabled={!Number(educationGroupsItem.lecturesHours)}
            />
            <S.ContainerIcon>
              <FaSortAmountDown
                onClick={() =>
                  applyNameTeacherAllEducationGroup(ColumnNumber.secondColumn)
                }
                style={{
                  cursor: 'pointer',
                  padding: 10,
                  backgroundColor: '#303a65',
                  marginLeft: 4,
                  borderRadius: 4,
                }}
              />
            </S.ContainerIcon>
          </S.ContainerHead>
        </S.TableCeil>
      )}
    </S.TableRow>
  );
};

export default Lectors;
