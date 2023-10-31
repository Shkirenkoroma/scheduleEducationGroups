import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setNewColumn } from 'src/store/slice/index';
import { HiOutlinePlus } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { useTableContext } from 'src/UI/components/schedulesGroup/scheduleGroupsItem/context';
import * as S from './index.styles';

const TableHeader: FC = (): JSX.Element => {
  const { tableNumber } = useTableContext();
  const dispatch = useAppDispatch();
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[tableNumber]?.isNewColumn,
  );

  const setColumnHandler = (isNewColumn: boolean): void => {
    dispatch(setNewColumn({ tableNumber, isNewColumn }));
  };

  return (
    <S.TableRow>
      <S.TableHead>Занятие</S.TableHead>
      <S.TableHead>Часы</S.TableHead>
      <S.TableHead
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          gap: 6,
        }}
      >
        <S.ContainerHead
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            gap: 6,
          }}
        >
          {isNewColumn ? 'Подгруппа 1' : 'Преподаватель'}
          {!isNewColumn && (
            <HiOutlinePlus
              onClick={() => setColumnHandler(true)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </S.ContainerHead>
      </S.TableHead>
      {isNewColumn && (
        <S.TableHead>
          <S.ContainerHead
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'end',
              gap: 6,
            }}
          >
            Подгруппа 2
            <MdDelete
              onClick={() => setColumnHandler(false)}
              style={{ cursor: 'pointer' }}
            />
          </S.ContainerHead>
        </S.TableHead>
      )}
    </S.TableRow>
  );
};

export default TableHeader;
